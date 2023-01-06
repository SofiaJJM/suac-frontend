import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefTableComponent } from './ref-table/ref-table.component';



@NgModule({
  declarations: [
    RefTableComponent
  ],
  exports:[
    RefTableComponent
  ]
})
export class TableModule { }
