import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material';

import { AuthGaurdService as AuthGuard } from './../core/auth/auth-gaurd.service';
import { tokenInterceptorProvider } from './auth/auth-interceptor';
import { LoaderModule } from './loader/loader.module';

@NgModule({
  declarations: [],
  providers: [ tokenInterceptorProvider, AuthGuard ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    LoaderModule
  ],
  exports: [
    LoaderModule
  ]
})
export class CoreModule { }
