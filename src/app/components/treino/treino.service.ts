import { Component, OnInit } from '@angular/core';
import { TreinoComponent } from './treino.component';
import { Observable } from 'rxjs/Observable';
import { GeralService } from '../geral.service';
import { RespostaPadrao, RespostaListaTreino, RespostaCadastro} from './resposta-treino';
import { AlunoComponent } from '../aluno/aluno.component';

export class TreinoService extends GeralService {
    uri_recurso = 'treinos';
    uri_recurso_item = 'itens-treino';
    uri_aluno = 'alunos';
    uri_exercicio_treino = 'exercicio-treino';

    cadastro(treino: any): Observable<RespostaCadastro> {
      return this.httpClient.post<RespostaCadastro>
      (this.url + this.uri_recurso, treino, {headers: this.getHeaderToken()});
    }

    cadastroItem(treino: TreinoComponent): Observable<RespostaPadrao> {
      return this.httpClient.post<RespostaPadrao>
      (this.url + this.uri_recurso_item, treino, {headers: this.getHeaderToken()});
    }

    editar(treino: TreinoComponent): Observable<RespostaPadrao> {
      return this.httpClient.put<RespostaPadrao>
      (this.url + this.uri_recurso + '/' + treino._id, treino, {headers: this.getHeaderToken()});
    }

    editarMsg(id:string, msg: string): Observable<RespostaPadrao> {
      return this.httpClient.put<RespostaPadrao>
        (this.url + this.uri_aluno + '/msg/' + id, {msg: msg}, { headers: this.getHeaderToken() });
    }
    
    ordenaExercicioSalva(exerciciosLista: any): Observable<any> {
      return this.httpClient.post<any>
      (this.url + this.uri_recurso_item + '/ordena' , exerciciosLista, {headers: this.getHeaderToken()});
    }

    editarItem(treino: TreinoComponent): Observable<RespostaPadrao> {
      return this.httpClient.put<RespostaPadrao>
      (this.url + this.uri_recurso_item + '/' + treino._id, treino, {headers: this.getHeaderToken()});
    }

    lista(aluno_id: string): Observable<RespostaListaTreino> {
      return this.httpClient.get<RespostaListaTreino>
      (this.url + this.uri_recurso + '/' + aluno_id, {headers: this.getHeaderToken()});
    }

    deletar(id: string): Observable<RespostaPadrao> {
      return this.httpClient.delete<RespostaPadrao>
      (this.url + this.uri_aluno + '/' + id, {headers: this.getHeaderToken()});
    }

    deletarItem(id: string): Observable<RespostaPadrao> {
      return this.httpClient.delete<RespostaPadrao>
      (this.url + this.uri_recurso_item + '/' + id, {headers: this.getHeaderToken()});
    }

    detalhes(id: string): Observable<TreinoComponent> {
      return this.httpClient.get<TreinoComponent>
      (this.url + this.uri_recurso + '/detalhe/' + id, {headers: this.getHeaderToken()});
    }

    detalhesTreino(id: string): Observable<TreinoComponent> {
      return this.httpClient.get<TreinoComponent>
      (this.url + this.uri_recurso_item + '/detalhe/' + id, {headers: this.getHeaderToken()});
    }

    buscaMsg(id: string): Observable<AlunoComponent> {
      return this.httpClient.get<AlunoComponent>
      (this.url + this.uri_aluno + '/msg/' + id, {headers: this.getHeaderToken()});
    }

    listaExerciciosTreino(item_treino_id: string): Observable<any[]> {
      return this.httpClient.get<any[]>
      (this.url + this.uri_exercicio_treino + '/' + item_treino_id, {headers: this.getHeaderToken()});
    }

    deletarExercicioTreino(id: string): Observable<RespostaPadrao> {
      return this.httpClient.delete<RespostaPadrao>
      (this.url + this.uri_exercicio_treino + '/' + id, {headers: this.getHeaderToken()});
    }
  }
