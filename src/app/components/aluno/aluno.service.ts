import { Component, OnInit } from '@angular/core';
import { AlunoComponent } from './aluno.component';
import { Observable } from 'rxjs/Observable';
import { GeralService } from '../geral.service';
import { RespostaPadrao } from './resposta-aluno';

export class AlunoService extends GeralService {
  uri_recurso = 'alunos';

  cadastro(educador: AlunoComponent): Observable<RespostaPadrao> {
    return this.httpClient.post<RespostaPadrao>
      (this.url + this.uri_recurso, educador, { headers: this.getHeaderToken() });
  }

  editar(aluno: AlunoComponent): Observable<RespostaPadrao> {
    return this.httpClient.put<RespostaPadrao>
      (this.url + this.uri_recurso + '/' + aluno._id, aluno, { headers: this.getHeaderToken() });
  }

  lista(): Observable<AlunoComponent[]> {
    return this.httpClient.get<AlunoComponent[]>
      (this.url + this.uri_recurso, { headers: this.getHeaderToken() });
  }

  listaInativos(): Observable<AlunoComponent[]> {
    return this.httpClient.get<AlunoComponent[]>
      (this.url + this.uri_recurso + '/inativos/todos/lista', { headers: this.getHeaderToken() });
  }

  ativarAluno(id: any): Observable<RespostaPadrao> {
    return this.httpClient.put<RespostaPadrao>
      (this.url + this.uri_recurso + '/ativa/aluno/' + id, {}, { headers: this.getHeaderToken() });
  }

  detalhes(id: string): Observable<AlunoComponent> {
    return this.httpClient.get<AlunoComponent>
      (this.url + this.uri_recurso + '/' + id, { headers: this.getHeaderToken() });
  }

  deletar(id: string): Observable<RespostaPadrao> {
    return this.httpClient.delete<RespostaPadrao>
      (this.url + this.uri_recurso + '/' + id, { headers: this.getHeaderToken() });
  }
}