import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import allLocales from '@fullcalendar/core/locales-all';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
})
export class CalendarioComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    aspectRatio: 5,
    locales: allLocales,
    locale: 'pt-br',
    eventContent: this.renderEventContent,

    events: [
      {
        date: '2022-03-07',
        backgroundColor: '#00ff00',
        imageUrl: '../../assets/Dentista/verde.png',
      },

      {
        date: '2022-03-08',
        backgroundColor: '#ffff00',
        imageUrl: '../../assets/Dentista/amarelo.png',
      },

      {
        date: '2022-03-09',
        backgroundColor: '#ff0000',
        imageUrl: '../../assets/Dentista/vermelho.png',
      },
    ],
  };

  renderEventContent(eventInfo: any, createElement: any): any {
    var innerHtml;
    //Check if event has image
    if (eventInfo.event._def.extendedProps.imageUrl) {
      innerHtml =
        eventInfo.event._def.title +
        "<img style='width:1px; height: 24px' src='" +
        eventInfo.event._def.extendedProps.imageUrl +
        "'>";
      return (createElement = { html: '<div>' + innerHtml + '</div>' });
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
