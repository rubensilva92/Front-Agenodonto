import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaAgendamentoComponent } from './pagina-agendamento.component';
import { PaginaAgendamentoRoutingModule } from './pagina-agendamento-routing.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { CalendarioModule } from 'src/app/components/calendario/calendario.module';



@NgModule({
  declarations: [PaginaAgendamentoComponent],
  imports: [
    CommonModule,
    PaginaAgendamentoRoutingModule,
    NavbarModule,
    CalendarioModule
  ],

})
export class PaginaAgendamentoModule { }
