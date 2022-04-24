import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalPacienteComponent } from './pagina-principal-paciente.component';


const routes: Routes = [{
  path: '',
  component: PaginaPrincipalPacienteComponent
}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class PaginaPrincipalPacienteRoutingModule { }
