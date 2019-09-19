import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuardAdmin implements CanActivate {

  constructor(private router: Router) {
  }

  verificaToken() {
    const token = localStorage.getItem('token');
    const perfil = localStorage.getItem('perfilASG');
    if(token != null){
     const exp = new Date(localStorage.getItem('expires'));
     const agora = new Date();
     return agora < exp && perfil.toString() === "Admin";
    }
  }

  canActivate() {
    if (this.verificaToken()) {
      return true;
    } else this.router.navigate(['/authentication/login']);
  }
}