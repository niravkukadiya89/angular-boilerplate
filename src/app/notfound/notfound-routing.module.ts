import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundcmpComponent } from './notfoundcmp/notfoundcmp.component';

const notfoundRoutes: Routes = [
  {
    path: '**',
    component: NotfoundcmpComponent,
    data: { title: '404 Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(notfoundRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class NotfoundRoutingModule { }
