import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { ShareModule } from './../shared/share.module';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [ShareModule,
            LoginRoutingModule,
            ReactiveFormsModule
          ],
  exports: [LoginComponent]
})

export class LoginModule { }
