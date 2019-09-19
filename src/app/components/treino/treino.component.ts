import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css']
})
export class TreinoComponent implements OnInit {

  _id: string;
  treino_id: string;
  aluno_id: string;
  descricao: string;
  nome: string;
  treino: string;
  exercicios = [];
  
  constructor() { }

  ngOnInit() {
  }

}
