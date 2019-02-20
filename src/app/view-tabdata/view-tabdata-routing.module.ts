import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewTabdataComponent } from './view-tabdata.component';


const routes: Routes = [
  { path: '', component: ViewTabdataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewTabdataRoutingModule { }
