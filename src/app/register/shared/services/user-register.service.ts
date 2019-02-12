import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/shared/shared-models/models/users/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserRegisterService {
  objUserModel: UserModel;

  constructor() { }
}
