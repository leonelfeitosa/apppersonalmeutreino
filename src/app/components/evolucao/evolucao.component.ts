import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evolucao',
  templateUrl: './evolucao.component.html',
  styleUrls: ['./evolucao.component.css']
})
export class EvolucaoComponent implements OnInit {

  _id: string;
  IMC: number;
  peso: number;
  torax: string;
  cintura: number;
  abdomem: string;
  quadril: string;
  coxaD: string;
  coxaE: string;
  pernaD: string;
  pernaE: string;
  bracoD: string;
  bracoE: string;
  antebracoD: string;
  antebracoE: string;
  dataAvaliacao: Date;
  aluno_id: string;

  constructor() { }

  ngOnInit() {
  }

}
