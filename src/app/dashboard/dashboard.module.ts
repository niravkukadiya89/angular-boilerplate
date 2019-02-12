import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ShareModule } from './../shared/share.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardProjectsComponent } from './dashboard-projects/dashboard-projects.component';

@NgModule({
    declarations: [DashboardComponent, DashboardProjectsComponent],
    entryComponents: [],
    imports: [ShareModule,
        NgbModule, DashboardRoutingModule,
        FormsModule, ReactiveFormsModule],
    providers: [{
        provide: NgbDateAdapter,
        useClass: NgbDateNativeAdapter
    }],
    exports: []
})

export class DashboardModule { }
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
