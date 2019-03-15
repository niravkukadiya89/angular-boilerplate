import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserModel } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  signinUser(userModel: UserModel) {
    return this.httpClient.post(environment.endPoint + 'user/login', userModel);
  }
}
