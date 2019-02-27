import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDossierComponent } from './add-dossier.component';
import { ShareModule } from '../shared/share.module';
import { RouterModule, Routes } from '@angular/router';
import { AddDossierRoutingModule } from './add-dossier-routing.module';

const addDossierRoutes: Routes = [
  { path: '', component: AddDossierComponent }
];

@NgModule({
  declarations: [AddDossierComponent],
  imports: [
    ShareModule,
    CommonModule,
    AddDossierRoutingModule,
    RouterModule.forChild(addDossierRoutes)
  ]

})
export class AddDossierModule { }
