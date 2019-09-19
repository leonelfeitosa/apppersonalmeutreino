import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItems } from '../../shared/menu-items/menu-items';

@Component({
  selector: 'app-with-social',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
  //usuario: string = "Selecione seu Perfil";
  constructor(
    private route: ActivatedRoute,
    private _router: Router,) {
      this.logout();
     }

  logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('expires');
      localStorage.removeItem('usuario');
      localStorage.removeItem('perfilASG');
  
      this._router.navigate(['/authentication/login']);   
  }

  ngOnInit() {
  }

}
