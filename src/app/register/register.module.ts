import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';
import { ShareModule } from './../shared/share.module';
import { RegisterRoutingModule } from './register-routing.module';
import { UserRegisterService } from './user-register.service';

@NgModule({
  declarations: [RegisterComponent],
  imports: [ShareModule, RegisterRoutingModule],
  exports: [RegisterComponent],
  providers: [UserRegisterService]
})

export class RegisterModule { }
