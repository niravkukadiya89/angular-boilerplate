import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', loadChildren: 'src/app/login/login.module#LoginModule', pathMatch: 'full' },
  { path: 'forgot-password', loadChildren: 'src/app/forgot-password/forgot-password.module#ForgotPasswordModule' },
  { path: 'register', loadChildren: 'src/app/register/register.module#RegisterModule' },
  { path: 'reset-password', loadChildren: 'src/app/reset-password/reset-password.module#ResetPasswordModule' },
  { path: '', loadChildren: 'src/app/layout/layout.module#LayoutModule' },
  { path: '**', loadChildren: 'src/app/notfound/notfound.module#NotfoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
