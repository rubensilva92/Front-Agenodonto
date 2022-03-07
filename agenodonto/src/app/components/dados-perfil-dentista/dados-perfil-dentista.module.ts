import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; 
import { DadosPerfilDentistaComponent } from './dados-perfil-dentista.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [DadosPerfilDentistaComponent,
  ],
  imports: [
    FullCalendarModule,
    CommonModule,
  ],

  exports: [
    DadosPerfilDentistaComponent
  ]
})
export class DadosPerfilDentistaModule { }
