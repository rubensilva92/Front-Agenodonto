import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login, UsuarioLogado } from 'src/app/model/login/login-acesso';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login/login.service';
import { RecuperaUsuarioLogadoService } from 'src/app/services/login/recupera-usuario-logado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  usuarioInvalido: boolean = false;
  idTipoUsuario: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private loginService: LoginService,
    private usuarioLogadoService: RecuperaUsuarioLogadoService,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required]],
      Senha: ['', [Validators.required]],
      
    });
    this.authService.UsuarioAutenticado(false);
  }

  async login() {
    const dados = this.loginForm.getRawValue() as Login;
    this.authService.UsuarioAutenticado(true);
    
    this.loginService.Login(dados).subscribe(
      (response: Array<UsuarioLogado>) => {
        this.usuarioInvalido = false;
        this.loginService.usuarioLogado = response;
        this.usuarioLogadoService.SetEmailUsuarioLogado(this.loginService.usuarioLogado[0].email);
        if (!response.length) {
          this.usuarioInvalido = true;
        }
      },
      (error) => console.error(error),
      () => {
        if (this.loginService.usuarioLogado.length) {
          this.authService.UsuarioAutenticado(true);
          this.idTipoUsuario = this.loginService.usuarioLogado[0].idTipoUsuario;
          /*
          if(this.idTipoUsuario == 1) {
            this.router.navigate(['pagina-principal-dentista']);
          }
          else {
            this.router.navigate(['pagina-principal-paciente']);
          }*/
          
        }
      }
    );
  }

}
