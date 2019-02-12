import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityLogRoutingModule } from './activity-log-routing.module';

const medewerkersRoutes: Routes = [
  { path: '', component: ActivityLogComponent }
];

@NgModule({
  declarations: [ActivityLogComponent],
  imports: [
    CommonModule,
    ActivityLogRoutingModule
  ]
})
export class ActivityLogModule { }
