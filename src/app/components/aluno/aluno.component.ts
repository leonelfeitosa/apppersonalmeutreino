import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  _id: string;
  nome: string;
  cpf: string;
  senha: string;
  IMC: number;
  peso: number;
  cintura: number;
  idade: number;
  massaMagra: number;
  massaGorda: number;
  altura: number;
  dataInicio: Date;
  msg: string;
  
  constructor() { }

  ngOnInit() {
  }

}
