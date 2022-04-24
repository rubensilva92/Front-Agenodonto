import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAgendamentoComponent } from './pagina-agendamento.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaAgendamentoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class PaginaAgendamentoRoutingModule { }
