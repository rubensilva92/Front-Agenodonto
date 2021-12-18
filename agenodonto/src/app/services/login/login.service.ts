import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, UsuarioLogado } from 'src/app/model/login/login-acesso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public usuarioLogado = new Array<UsuarioLogado>();

  constructor(public httpClient: HttpClient) { }

  private readonly baseUrl = environment["endPoint"];

  Login(login: Login) {
    return this.httpClient.post<Array<UsuarioLogado>>(
      `${this.baseUrl}/Usuario/login`,login
    );
  }
}
