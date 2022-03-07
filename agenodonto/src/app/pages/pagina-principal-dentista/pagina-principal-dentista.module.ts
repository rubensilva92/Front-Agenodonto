import { NgModule } from '@angular/core';
import { PaginaPrincipalDentistaComponent } from './pagina-principal-dentista.component';
import { PaginaPrincipalDentistaRoutingModule } from './pagina-principal-dentista-routing.module';
import { DadosPerfilDentistaModule } from 'src/app/components/dados-perfil-dentista/dados-perfil-dentista.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

@NgModule({
  declarations: [PaginaPrincipalDentistaComponent],
  imports: [
    PaginaPrincipalDentistaRoutingModule,
    DadosPerfilDentistaModule,
    NavbarModule,
  ],
  providers: [
  ]
})
export class PaginaPrincipalDentistaModule { }
