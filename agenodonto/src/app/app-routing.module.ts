import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home/login'
  },
  {
    path: 'home',
    loadChildren: () =>
    import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pagina-principal-dentista',
    loadChildren: () =>
    import('./pages/pagina-principal-dentista/pagina-principal-dentista.module').then((m) => m.PaginaPrincipalDentistaModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'pagina-principal-paciente',
    loadChildren: () =>
    import('./pages/pagina-principal-paciente/pagina-principal-paciente.module').then((m) => m.PaginaPrincipalPacienteModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'pagina-agendamento',
    loadChildren: () =>
    import('./pages/pagina-agendamento/pagina-agendamento.module').then((m) => m.PaginaAgendamentoModule),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
