import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MedewerkersRoutingModule } from './medewerkers-routing.module';
import { MedewerkersComponent } from './medewerkers.component';
import { AuthGaurdService as AuthGuard } from './../core/auth/auth-gaurd.service';
import { NgbDateAdapter, NgbDateNativeAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap';

const medewerkersRoutes: Routes = [
  { path: '', component: MedewerkersComponent }
];

@NgModule({
  declarations: [MedewerkersComponent],
  imports: [
    CommonModule,
    NgbModule,
    MedewerkersRoutingModule,
    RouterModule.forChild(medewerkersRoutes)
  ],
  providers: [{
    provide: NgbDateAdapter,
    useClass: NgbDateNativeAdapter
}]
})
export class MedewerkersModule { }