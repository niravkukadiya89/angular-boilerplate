import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundcmpComponent } from './notfoundcmp/notfoundcmp.component';
import { NotfoundRoutingModule } from './notfound-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NotfoundRoutingModule
  ],
  declarations: [NotfoundcmpComponent]
})
export class NotfoundModule { }
