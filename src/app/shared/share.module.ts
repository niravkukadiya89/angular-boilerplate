import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';

import { QRCodeModule } from 'angularx-qrcode';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';

import { MaterialModule } from './material-module';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'name',
  keepSelectedItems: true
};
  
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    ToastrModule.forRoot(),
    TranslateModule,
    MaterialModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatExpansionModule,
    QRCodeModule,
    CommonModule,
    NgxSelectModule.forRoot(CustomSelectOptions)
  ],

  declarations: [],
  exports: [
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    TranslateModule,
    NgMultiSelectDropDownModule,
    MaterialModule,
    MatExpansionModule,
    QRCodeModule,
    CommonModule,
    NgxSelectModule
  ]
})
export class ShareModule {}
