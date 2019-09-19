import { Component, OnInit } from '@angular/core';
import { ExercicioComponent } from './exercicio.component';
import { Observable } from 'rxjs/Observable';
import { GeralService } from '../geral.service';
import { RespostaPadrao, RespostaCadastro} from './resposta-exercicio';

export class ExercicioService extends GeralService {
    uri_recurso = 'exercicios';

    cadastro(exercicio: ExercicioComponent): Observable<RespostaPadrao> {
      return this.httpClient.post<RespostaPadrao>
      (this.url + this.uri_recurso, exercicio, {headers: this.getHeaderToken()});
    }

    editar(exercicio: ExercicioComponent): Observable<RespostaPadrao> {
      return this.httpClient.put<RespostaPadrao>
      (this.url + this.uri_recurso + '/' + exercicio._id, exercicio, {headers: this.getHeaderToken()});
    }

    lista(): Observable<any[]> {
      return this.httpClient.get<any[]>
      (this.url + this.uri_recurso, {headers: this.getHeaderToken()});
    }

    deletar(id: string): Observable<RespostaPadrao> {
      return this.httpClient.delete<RespostaPadrao>
      (this.url + this.uri_recurso + '/' + id, {headers: this.getHeaderToken()});
    }

    detalhes(id: string): Observable<ExercicioComponent> {
      return this.httpClient.get<ExercicioComponent>
      (this.url + this.uri_recurso + '/' + id, {headers: this.getHeaderToken()});
    }
  }
