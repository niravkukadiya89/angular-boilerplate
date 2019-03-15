import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TranslateModule } from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    ToastrModule.forRoot(),
    TranslateModule,
    CommonModule,
    CollapseModule,
  ],

  declarations: [],
  exports: [
    AngularSvgIconModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    TranslateModule,
    CommonModule,
    CollapseModule,
  ]
})
export class ShareModule { }
