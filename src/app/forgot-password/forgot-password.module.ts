import { NgModule } from '@angular/core';

import { ForgotPasswordComponent } from './forgot-password.component';
import { ShareModule } from './../shared/share.module';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [ShareModule, ForgotPasswordRoutingModule],
  exports: [ForgotPasswordComponent]
})

export class ForgotPasswordModule { }
