import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { ShareModule } from '../shared/share.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ShareModule,
  ],
  declarations: [
    LayoutComponent,
    UserDialogComponent,
    HeaderComponent
  ],
  entryComponents: [UserDialogComponent]
})
export class LayoutModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
