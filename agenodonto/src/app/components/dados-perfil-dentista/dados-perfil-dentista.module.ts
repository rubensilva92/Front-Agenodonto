import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarioModule } from '../calendario/calendario.module';
import { DadosPerfilDentistaComponent } from './dados-perfil-dentista.component';



@NgModule({
  declarations: [DadosPerfilDentistaComponent,
  ],
  imports: [
    CommonModule,
    CalendarioModule,
  ],

  exports: [
    DadosPerfilDentistaComponent
  ]
})
export class DadosPerfilDentistaModule { }
