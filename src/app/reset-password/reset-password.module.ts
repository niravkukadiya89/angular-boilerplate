import { NgModule } from '@angular/core';

import { ResetPasswordComponent } from 'src/app/reset-password/reset-password.component';
import { ShareModule } from 'src/app/shared/share.module';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';

@NgModule({
  imports: [
    ShareModule,
    ResetPasswordRoutingModule
  ],
  declarations: [ResetPasswordComponent]
})
export class ResetPasswordModule { }
