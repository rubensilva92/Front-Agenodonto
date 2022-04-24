import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosPerfilPacienteComponent } from './dados-perfil-paciente.component';
import { NavbarModule } from '../navbar/navbar.module';
import { BuscaDentistaModule } from '../busca-dentista/busca-dentista.module';
import { TabelaResultadoBuscaDentistaModule } from '../tabela-resultado-busca-dentista/tabela-resultado-busca-dentista.module';
import { CalendarioModule } from '../calendario/calendario.module';



@NgModule({
  declarations: [DadosPerfilPacienteComponent],
  imports: [
    CommonModule,
    NavbarModule,
    BuscaDentistaModule,
    TabelaResultadoBuscaDentistaModule,
    CalendarioModule,
  ],
  exports: [
    DadosPerfilPacienteComponent
  ]
})
export class DadosPerfilPacienteModule { }
