import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login.component';
import { Observable } from 'rxjs/Observable';
import { GeralService } from '../../components/geral.service';
import { RespostaPadrao} from './resposta-login';

export class LoginService extends GeralService {
    uri_recurso = 'login';
 
    login(login: LoginComponent): Observable<RespostaPadrao> {
      return this.httpClient.post<RespostaPadrao>
      (this.url + this.uri_recurso, login, {});
    }
  }
