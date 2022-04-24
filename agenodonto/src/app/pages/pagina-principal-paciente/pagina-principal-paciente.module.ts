import { NgModule } from '@angular/core';
import { DadosPerfilPacienteModule } from 'src/app/components/dados-perfil-paciente/dados-perfil-paciente.module';
import { PaginaPrincipalPacienteRoutingModule } from './pagina-principal-paciente-routing.module';
import { PaginaPrincipalPacienteComponent } from './pagina-principal-paciente.component';



@NgModule({
  declarations: [PaginaPrincipalPacienteComponent],
  imports: [
    DadosPerfilPacienteModule,
    PaginaPrincipalPacienteRoutingModule,
  ]
})
export class PaginaPrincipalPacienteModule { }
