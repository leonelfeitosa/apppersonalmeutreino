import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  cpf: string;
  senha: string;
  usuario: string;
  user: string;
  constructor() { }

  ngOnInit() {
  }

}
