import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenComponent } from './open/open.component';

@NgModule({
  declarations: [DashboardComponent, OpenComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports: [OpenComponent]
})
export class DashboardModule { }
