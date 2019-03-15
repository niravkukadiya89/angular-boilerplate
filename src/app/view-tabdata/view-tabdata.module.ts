import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTabdataRoutingModule } from './view-tabdata-routing.module';
import { ViewTabdataComponent } from './view-tabdata.component';
import { ShareModule } from '../shared/share.module';
import { ViewTabdataService } from './view-tabdata.service';

@NgModule({
  declarations: [ViewTabdataComponent],
  imports: [
    CommonModule,
    ViewTabdataRoutingModule,
    ShareModule
  ],
  exports: [ViewTabdataComponent],
  providers: [ViewTabdataService]
})
export class ViewTabdataModule { }
