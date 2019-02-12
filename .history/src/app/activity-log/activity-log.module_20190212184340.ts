import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityLogRoutingModule } from './activity-log-routing.module';
import { ActivityLogComponent } from './activity-log.component';
import { Routes } from '@angular/router';

const medewerkersRoutes: Routes = [
  { path: '', component: ActivityLogComponent }
];

@NgModule({
  declarations: [ActivityLogComponent],
  imports: [
    CommonModule,
    ActivityLogRoutingModule,
    RouterModule.forChild(medewerkersRoutes)
  ]
})
export class ActivityLogModule { }
