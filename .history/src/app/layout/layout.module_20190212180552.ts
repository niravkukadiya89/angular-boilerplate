import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { ShareModule } from '../shared/share.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ShareModule,
    
    NgMultiSelectDropDownModule.forRoot(),
    NgxMatSelectSearchModule
  ],
  declarations: [
    LayoutComponent,
    UserDialogComponent
  ],
  entryComponents: [UserDialogComponent]
})
export class LayoutModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
