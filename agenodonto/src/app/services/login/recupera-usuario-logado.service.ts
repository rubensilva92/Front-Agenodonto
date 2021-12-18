import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecuperaUsuarioLogadoService {

  private emailUsuarioLogado: any;

  SetEmailUsuarioLogado(emailUser: string) {
    sessionStorage.setItem('emailUsuarioLogado', JSON.stringify(emailUser));
    this.emailUsuarioLogado = emailUser;
  }

  getEmailUsuarioLogado():string {
    this.emailUsuarioLogado = sessionStorage.getItem('emailUsuarioLogado');
    return this.emailUsuarioLogado;
  }


  constructor() { }
}
