import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { UserModel } from 'src/app/shared/shared-models/models/users/user.model';

@Injectable({
  providedIn: 'root'
})

export class ManageUsersService {

  constructor(private _httpClient: HttpClient) { }

  createUser(objUserModel: UserModel) {
    return this._httpClient.post(environment.endPoint + 'user/create', objUserModel);
  }

  getUserList() {
    return this._httpClient.get(environment.endPoint + 'user/list');
  }

  updateUser(objUserModel: UserModel) {
    return this._httpClient.put(environment.endPoint + 'user/id/' + objUserModel._id + '/update', objUserModel);
  }

  deleteUserById(userId: string) {
    return this._httpClient.delete(environment.endPoint + 'user/id/' + userId + '/delete');
  }

  resetUserPassword(emailId: string) {
    return this._httpClient.post(environment.endPoint + 'user/email/' + emailId + '/request-password', null);
  }

  getUserDetailsById(userId: string) {
    return this._httpClient.get(environment.endPoint + 'user/id/' + userId);
  }
}
