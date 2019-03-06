import {
    HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,
    HttpResponse, HttpErrorResponse, HttpResponseBase, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    readonly TOKEN_HEADER: string = 'user-token';
    token: string;

    constructor(private router: Router,
        private translateService: TranslateService, public snackBar: MatSnackBar) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const reqClone = req.clone({ setHeaders: this.authHeaders });
        return next.handle(reqClone)
            .pipe(
                tap(this.onSubscribeSuccess.bind(this), this.onSubscribeError.bind(this))
            );
    }
    defaultErrorHandler(error: HttpErrorResponse) {
        this.snackBar.open(this.errorMessage(error.status), 'Error', {
            duration: 2500,
            verticalPosition: 'top'
        });
    }

    handleError401(error: HttpErrorResponse) {
        this.snackBar.open(this.errorMessage(error.status), 'Error', {
            duration: 2500,
            verticalPosition: 'top'
        });
        sessionStorage.clear();
        this.router.navigate(['']);
    }

    get authHeaders(): { [h: string]: string } {
        this.token = sessionStorage.getItem('token');
        return this.token ?
            { [this.TOKEN_HEADER]: this.token } :
            {};
    }

    updateTokenFromResponse(res: HttpResponseBase) {
        const headerName = this.TOKEN_HEADER;
        if (res.headers && res.headers.has(headerName)) {
            sessionStorage.setItem('token', res.headers.get(headerName));
        }
    }

    errorMessage(status): string {
        return this.translateService.instant(`errors.${status}`);
    }

    private onSubscribeSuccess(res: HttpEvent<any>) {
        if (res instanceof HttpResponse) {
            this.updateTokenFromResponse(res);
        }
    }

    private onSubscribeError(error: HttpEvent<any>) {
        if (!(error instanceof HttpErrorResponse)) {
            return;
        }

        const handlerName = 'handleError' + error.status;
        if (typeof this[handlerName] === 'function') {
            return this[handlerName](error);
        }

       // this.defaultErrorHandler(error);
        this.updateTokenFromResponse(error);
    }
}

export const tokenInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};
