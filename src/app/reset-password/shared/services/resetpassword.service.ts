import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResetPasswordModel } from 'src/app/shared/shared-models/models/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor(private _httpClient: HttpClient) { }

  resetPassword(email: string, token: string, model: ResetPasswordModel) {
    return this._httpClient.put(environment.endPoint + 'user/email/' + email + '/token/' + token + '/set-password', model);
  }
}
