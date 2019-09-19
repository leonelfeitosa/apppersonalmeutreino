import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login.component';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from '../../../components/mensagem.service';

@Component({
  selector: 'app-with-social',
  templateUrl: './with-social.component.html',
  styleUrls: ['./with-social.component.css']
})
export class WithSocialComponent implements OnInit {
  login: LoginComponent = new LoginComponent;
  mensagemErro: string;
  mostrar: boolean = false;
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private _router: Router,
    private mensagemService: MensagemService
  ) {
    
  }

  logar() {
    this.loginService.login(this.login).subscribe(res => {
      localStorage.removeItem('token');
      localStorage.removeItem('expires');
      localStorage.removeItem('usuario');
      localStorage.removeItem('perfilASG');
      localStorage.setItem('token', res.token);
      localStorage.setItem('expires', res.expires);
      localStorage.setItem('usuario', res.user_name);
      localStorage.setItem('user', res.user);
      localStorage.setItem('perfilASG', res.profile);

      //this._router.navigate(['/dashboard']);
      window.location.href = "http://meutreino.life/dashboard";
      //window.location.href = "http://localhost:4200/dashboard";   
    }, error => {
      let mensagem = {msg: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.msg)
        this.mensagemErro = mensagem.msg;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  educador() {
    this.mostrar = true;
    this.login.usuario = "Educador";
  }

  admin() {
    this.mostrar = true;
    this.login.usuario = "Admin";
  }

  ngOnInit() {
  }

}
