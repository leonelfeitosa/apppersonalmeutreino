import { Component, OnInit } from '@angular/core';
import { ConsultaComponent } from './consulta.component';
import { Observable } from 'rxjs/Observable';
import { GeralService } from '../../components/geral.service';

export class ConsultaService extends GeralService {
    uri_recurso = 'consultas/detalhe/';
 
    buscaConsultaImprimir(id: string): Observable<ConsultaComponent> {
      return this.httpClient.get<ConsultaComponent>
      (this.url + this.uri_recurso + id, {headers: this.getHeaderToken()});
    }
  }
