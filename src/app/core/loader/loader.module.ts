import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { LoaderComponent } from './loader.component/loader.component';
import { LoaderService } from './loader.service/loader.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [LoaderComponent],
  providers: [
      LoaderService
  ],
  exports: [
      LoaderComponent
  ]
})
export class LoaderModule { }
