import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './module/material/material.module';
import { NgTableComponent } from './components/ng-table/ng-table.component';



@NgModule({
  declarations: [
    NgTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    NgTableComponent
  ]
})
export class SharedModule { }
