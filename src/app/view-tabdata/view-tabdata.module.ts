import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTabdataRoutingModule } from './view-tabdata-routing.module';
import { ViewTabdataComponent } from './view-tabdata.component';
import { ShareModule } from '../shared/share.module';

@NgModule({
  declarations: [ViewTabdataComponent],
  imports: [
    CommonModule,
    ViewTabdataRoutingModule,
    ShareModule
  ],
  exports: [ViewTabdataComponent]
})
export class ViewTabdataModule { }
