import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';

@Injectable()

export class UserRegisterService {
  objUserModel: UserModel;

  constructor() { }
}
