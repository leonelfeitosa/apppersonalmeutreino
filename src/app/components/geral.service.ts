import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http/src/headers';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class GeralService {

  url = environment.apiURL;

  httpClient: HttpClient;
  headers: HttpHeaders;

  constructor(httpClient: HttpClient, private _router: Router,) {
    this.httpClient = httpClient;
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Authorization', 'none');
  }

  getHeaderToken(): HttpHeaders {
    const token = localStorage.getItem('token');
    this.headers = this.headers.delete('Authorization');
    this.headers = this.headers.append('Authorization', token);
    return this.headers;
  }

  verificaToken() {
    const token = localStorage.getItem('token');
    if(token != null){
     const exp = new Date(localStorage.getItem('expires'));
     const agora = new Date();
     return agora < exp;
    }
  }
}
