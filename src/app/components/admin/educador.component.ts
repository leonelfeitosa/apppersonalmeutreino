import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestor',
  templateUrl: './educador.component.html',
  styleUrls: ['./educador.component.css']
})
export class EducadorComponent implements OnInit {

  _id: string;
  nome: string;
  cpf: string;
  senha: string;
  telefone: string;
  
  constructor() { }

  ngOnInit() {
  }

}
