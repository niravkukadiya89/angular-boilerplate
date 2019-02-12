import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';
import { ShareModule } from './../shared/share.module';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [ShareModule, RegisterRoutingModule],
  exports: [RegisterComponent]
})

export class RegisterModule { }
