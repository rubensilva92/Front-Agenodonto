import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, UsuarioLogado } from 'src/app/model/login/login-acesso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public usuarioLogado = new UsuarioLogado();

  constructor(public httpClient: HttpClient) { }

  private readonly baseUrl = environment["endPoint"];

  Login(login: Login) {
    debugger
    return this.httpClient.post<UsuarioLogado>(
      `${this.baseUrl}/Usuario/login`,login
    );
  }
}
