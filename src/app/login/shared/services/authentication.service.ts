import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserModel } from 'src/app/shared/shared-models/models/users/user.model';

import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  signinUser(userModel: UserModel) {
    return this.httpClient.post(environment.endPoint + 'user/login', userModel);

  }
}
