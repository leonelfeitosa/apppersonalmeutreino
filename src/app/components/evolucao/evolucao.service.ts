import { Component, OnInit } from '@angular/core';
import { EvolucaoComponent } from './evolucao.component';
import { Observable } from 'rxjs/Observable';
import { GeralService } from '../geral.service';
import { RespostaPadrao } from './resposta-evolucao';

export class EvolucaoService extends GeralService {
    uri_recurso = 'evolucaos/';
    
    cadastro(evolucao: EvolucaoComponent): Observable<RespostaPadrao> {
      return this.httpClient.post<RespostaPadrao>
      (this.url + this.uri_recurso, evolucao, {headers: this.getHeaderToken()});
    }

    editar(evolucao: EvolucaoComponent): Observable<RespostaPadrao> {
      return this.httpClient.put<RespostaPadrao>
      (this.url + this.uri_recurso + evolucao._id, evolucao, {headers: this.getHeaderToken()});
    }

    lista(aluno_id: string): Observable<EvolucaoComponent []> {
      return this.httpClient.get<EvolucaoComponent []>
      (this.url + this.uri_recurso + aluno_id, {headers: this.getHeaderToken()});
    }

    detalhes(id: string): Observable<EvolucaoComponent> {
      return this.httpClient.get<EvolucaoComponent>
      (this.url + this.uri_recurso + 'detalhe/' + id, {headers: this.getHeaderToken()});
    }

    deletar(id: string): Observable<RespostaPadrao> {
      return this.httpClient.delete<RespostaPadrao>
      (this.url + this.uri_recurso + id, {headers: this.getHeaderToken()});
    }
  }