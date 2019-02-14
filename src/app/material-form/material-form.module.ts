import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialFormRoutingModule } from './material-form-routing.module';
import { MaterialFormComponent } from './material-form.component';
import { ShareModule } from '../shared/share.module';
import { MatAutocompleteModule, MatSliderModule } from '@angular/material';

@NgModule({
  declarations: [MaterialFormComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialFormRoutingModule,
    MatAutocompleteModule,
    MatSliderModule
  ]
})
export class MaterialFormModule { }
