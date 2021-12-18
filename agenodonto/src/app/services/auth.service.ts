import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  constructor() { }

  UsuarioAutenticado(status: boolean) {
    sessionStorage.setItem('usuarioAutenticado', JSON.stringify(status));

    this.usuarioAutenticado = status;
  }

  UsuarioEstaAutenticado(): Promise<boolean> {
    this.usuarioAutenticado = sessionStorage.getItem('usuarioAutenticado') == 'true';

    return Promise.resolve(this.usuarioAutenticado);
  }
}
