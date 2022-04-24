import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaResultadoBuscaDentistaComponent } from './tabela-resultado-busca-dentista.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [TabelaResultadoBuscaDentistaComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    TabelaResultadoBuscaDentistaComponent
  ]
})
export class TabelaResultadoBuscaDentistaModule { }
