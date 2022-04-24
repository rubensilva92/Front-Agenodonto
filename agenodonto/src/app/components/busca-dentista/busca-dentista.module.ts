import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaDentistaComponent } from './busca-dentista.component';



@NgModule({
  declarations: [BuscaDentistaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BuscaDentistaComponent,
  ]
})
export class BuscaDentistaModule { }
