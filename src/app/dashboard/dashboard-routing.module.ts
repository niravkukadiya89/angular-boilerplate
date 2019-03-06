import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGaurdService as AuthGuard } from './../core/auth/auth-gaurd.service';
import { DashboardProjectsResolverService } from './dashboard-projects/dashboard-projects-resolver.service';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
    // canActivate: [AuthGuard],
    // resolve: { projects: DashboardProjectsResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
