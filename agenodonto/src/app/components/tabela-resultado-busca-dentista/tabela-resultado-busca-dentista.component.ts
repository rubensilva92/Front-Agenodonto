import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-resultado-busca-dentista',
  templateUrl: './tabela-resultado-busca-dentista.component.html',
  styleUrls: ['./tabela-resultado-busca-dentista.component.scss']
})
export class TabelaResultadoBuscaDentistaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  consultarDatasHorarios(): void {
    this.router.navigate(['pagina-agendamento']);
  }

}
