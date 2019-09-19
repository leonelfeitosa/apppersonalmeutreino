import { Component, OnInit } from '@angular/core';
import { EducadorComponent } from './educador.component';
import { Observable } from 'rxjs/Observable';
import { GeralService } from '../geral.service';
import { RespostaPadrao } from './resposta-educador';

export class EducadorService extends GeralService {
    uri_recurso = 'educadores';
    
    editar(educador: EducadorComponent): Observable<RespostaPadrao> {
      return this.httpClient.put<RespostaPadrao>
      (this.url + this.uri_recurso + '/' + educador._id, educador, {headers: this.getHeaderToken()});
    }

    detalhes(id: string): Observable<EducadorComponent> {
      return this.httpClient.get<EducadorComponent>
      (this.url + this.uri_recurso + '/' + id, {headers: this.getHeaderToken()});
    }
  }