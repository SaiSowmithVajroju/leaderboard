import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MaterialModule } from '@app-shared/module/material/material.module';
import { SharedModule } from '@app-shared/shared.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class CoreModule { }
