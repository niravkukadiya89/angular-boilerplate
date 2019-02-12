import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { LayoutComponent } from './layout.component';
import { AuthGaurdService as AuthGuard } from '../core/auth/auth-gaurd.service';

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
        path: 'medewerkers',
        loadChildren: '../medewerkers/medewerkers.module#MedewerkersModule',
        data: { title: 'medewerkers' }
      },
      {
        path: 'activity-log',
        loadChildren: '../activity-log/activity-log.module#ActivityLogModule',
        data: { title: 'activity-log' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
