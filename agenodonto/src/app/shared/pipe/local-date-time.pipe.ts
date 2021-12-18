import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: any, ...args: any): any {
    let dataAtual = new Date(date)
    return moment(dataAtual).format('dd/MM/yyyy');
  }

}
