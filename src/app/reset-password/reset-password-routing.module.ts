import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from 'src/app/reset-password/reset-password.component';

const resetpasswordmoduleroute: Routes = [
  { path: '', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(resetpasswordmoduleroute)],
  exports: [RouterModule]
})
export class ResetPasswordRoutingModule { }
