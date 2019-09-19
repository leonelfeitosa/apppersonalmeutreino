import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.css']
})
export class ExercicioComponent implements OnInit {

  _id: string;
  nomeExercicio: string;
  linkVideoExercicio: string;
  
  constructor() { }

  ngOnInit() {
  }

}
