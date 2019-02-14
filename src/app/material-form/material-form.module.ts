import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialFormRoutingModule } from './material-form-routing.module';
import { MaterialFormComponent } from './material-form.component';
import { ShareModule } from '../shared/share.module';

@NgModule({
  declarations: [MaterialFormComponent],
  imports: [
    CommonModule,
    ShareModule,
    MaterialFormRoutingModule
  ]
})
export class MaterialFormModule { }
