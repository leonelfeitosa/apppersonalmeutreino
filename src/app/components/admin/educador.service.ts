import { Component, OnInit } from '@angular/core';
import { EducadorComponent } from './educador.component';
import { Observable } from 'rxjs/Observable';
import { GeralService } from '../geral.service';
import { RespostaPadrao } from './resposta-educador';

export class EducadorService extends GeralService {
    uri_recurso = 'educadores';
    
    cadastro(educador: EducadorComponent): Observable<RespostaPadrao> {
      return this.httpClient.post<RespostaPadrao>
      (this.url + this.uri_recurso + '/', educador, {headers: this.getHeaderToken()});
    }

    editar(educador: EducadorComponent): Observable<RespostaPadrao> {
      return this.httpClient.put<RespostaPadrao>
      (this.url + this.uri_recurso + '/' + educador._id, educador, {headers: this.getHeaderToken()});
    }

    lista(): Observable<EducadorComponent[]> {
      return this.httpClient.get<EducadorComponent[]>
      (this.url + this.uri_recurso, {headers: this.getHeaderToken()});
    }

    listaInativos(): Observable<EducadorComponent[]> {
      return this.httpClient.get<EducadorComponent[]>
      (this.url + this.uri_recurso + '/inativos/todos', {headers: this.getHeaderToken()});
    }

    detalhes(id: string): Observable<EducadorComponent> {
      return this.httpClient.get<EducadorComponent>
      (this.url + this.uri_recurso + '/' + id, {headers: this.getHeaderToken()});
    }

    deleta(id: string): Observable<any> {
      return this.httpClient.delete<any>
      (this.url + this.uri_recurso + '/' + id, {headers: this.getHeaderToken()});
    }

    ativar(id: string): Observable<any> {
      return this.httpClient.delete<any>
      (this.url + this.uri_recurso + '/ativar/' + id, {headers: this.getHeaderToken()});
    }
  }