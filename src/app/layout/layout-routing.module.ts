import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: { title: 'layout' },
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule',
        data: { title: 'Dashboard' }
      },
      {
        path: 'activity-log',
        loadChildren: '../activity-log/activity-log.module#ActivityLogModule',
        data: { title: 'activity-log' }
      },
      {
        path: 'view-tabdata',
        loadChildren: '../view-tabdata/view-tabdata.module#ViewTabdataModule',
        data: { title: 'view-tabdata' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
