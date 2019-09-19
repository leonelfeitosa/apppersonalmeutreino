import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  _id: string;
  titulo: string;
  nome: string;
  data: string;
  hora: string;
  historico: string;
  evolucao: string;
  constructor() { }

  ngOnInit() {
  }

}
