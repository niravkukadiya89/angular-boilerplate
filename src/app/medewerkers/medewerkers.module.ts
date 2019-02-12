import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MedewerkersRoutingModule } from './medewerkers-routing.module';
import { MedewerkersComponent } from './medewerkers.component';
import { AuthGaurdService as AuthGuard } from './../core/auth/auth-gaurd.service';

const medewerkersRoutes: Routes = [
  { path: '', component: MedewerkersComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [MedewerkersComponent],
  imports: [
    CommonModule,
    MedewerkersRoutingModule,
    RouterModule.forChild(medewerkersRoutes)
  ]
})
export class MedewerkersModule { }