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
      // {
      //   path: 'dashboard/:id',
      //   loadChildren: 'src/app/project/project.module#ProjectModule',
      //   data: { title: 'dashboard/:id' }
      // },
      // {
      //   path: 'dashboard/:id/project-document',
      //   loadChildren: 'src/app/project/project-document/project-document.module#ProjectDocumentModule',
      //   data: { title: 'dashboard/:id/project-document' }
      // },
      // {
      //   path: 'dashboard/:id/project-info',
      //   loadChildren: 'src/app/project/project-info/project-info.module#ProjectInfoModule',
      //   data: { title: 'dashboard/:id/project-info' }
      // },
      // {
      //   path: 'dashboard/:id/project-shared',
      //   loadChildren: 'src/app/project/project-shared/project-shared.module#ProjectSharedModule',
      //   data: { title: 'dashboard/:id/project-shared' }
      // },
      // {
      //   path: 'project-details/:ide',
      //   loadChildren: '../project-details/project-details.module#ProjectDetailsModule',
      //   data: { title: 'project-details/:ide' }
      // },
      // {
      //   path: 'product',
      //   loadChildren: '../product/product.module#ProductModule',
      //   data: { title: 'product' }
      // },
      // {
      //   path: 'providers',
      //   loadChildren: '../provider/provider.module#ProvidersModule',
      //   data: { title: 'providers' }
      // },
      // {
      //   path: 'my-profile',
      //   loadChildren: 'src/app/account-profile/my-profile/my-profile.module#MyProfileModule',
      //   data: { title: 'my-profile' }
      // },
      // {
      //   path: 'my-profile/my-projects',
      //   loadChildren: 'src/app/account-profile/my-projects/my-projects.module#MyProjectsModule',
      //   data: { title: 'my-profile/my-projects' }
      // },
      // {
      //   path: 'my-profile/organizations',
      //   loadChildren: 'src/app/account-profile/organizations/organizations.module#OrganizationsModule',
      //   data: { title: 'my-profile/organizations' }
      // },
      // {
      //   path: 'my-profile/help',
      //   loadChildren: 'src/app/account-profile/help/help.module#HelpModule',
      //   data: { title: 'my-profile/help' }
      // },
      // {
      //   path: 'my-profile/manage-users',
      //   loadChildren: 'src/app/account-profile/manage-users/manage-users.module#ManageUsersModule',
      //   data: { title: 'my-profile/manage-users' }
      // },
      // {
      //   path: 'my-profile/roles-and-access',
      //   loadChildren: 'src/app/account-profile/roles-and-access/roles-and-access.module#RolesAndAccessModule',
      //   data: { title: 'my-profile/roles-and-access' }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
