import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityLogRoutingModule } from './activity-log-routing.module';
import { ActivityLogComponent } from './activity-log.component';
import { Routes, RouterModule } from '@angular/router';

const activitylogRoutes: Routes = [
  { path: '', component: ActivityLogComponent }
];

@NgModule({
  declarations: [ActivityLogComponent],
  imports: [
    CommonModule,
    ActivityLogRoutingModule,
    RouterModule.forChild(activitylogRoutes)
  ]
})
export class ActivityLogModule { }
