import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityLogRoutingModule } from './activity-log-routing.module';
import { ActivityLogComponent } from './activity-log/activity-log.component';

const medewerkersRoutes: Routes = [
  { path: '', component:  }
];

@NgModule({
  declarations: [ActivityLogComponent],
  imports: [
    CommonModule,
    ActivityLogRoutingModule
  ]
})
export class ActivityLogModule { }
