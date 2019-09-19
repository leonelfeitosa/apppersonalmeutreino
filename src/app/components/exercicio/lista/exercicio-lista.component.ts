import { Component, OnInit } from '@angular/core';
import { ExercicioService } from '../exercicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ExercicioComponent } from '../exercicio.component';
import { MensagemService } from '../../mensagem.service';
import { PaginaService } from '../../pagina.service';
import { AlunoComponent } from '../../aluno/aluno.component';

@Component({
  selector: 'app-basic',
  templateUrl: './exercicio-lista.component.html',
  styleUrls: ['./exercicio-lista.component.css']
})
export class TreinoListaComponent implements OnInit {
  exercicios: any[];
  exercicio: ExercicioComponent = new ExercicioComponent;
  mensagemSucesso: string;
  mensagemErro: string;
  mensagem: string;
  perfil: string;
  voltarUrl: string;
  verifica: boolean = false;
  
  constructor(
    private exercicioService: ExercicioService,
    private route: ActivatedRoute,
    private _router: Router,
    private mensagemService: MensagemService,
    private paginaService: PaginaService
  ) {
    this.lista();
    this.paginaService.alteraPaginas();
    this.voltarUrl = localStorage.getItem("paginaAnterior");
    this.perfil = localStorage.getItem("perfilASG");
  }

  lista() {
    this.exercicioService.lista().subscribe(res => {
      this.mensagemSucesso = this.mensagemService.getMensagem();
      this.mensagemService.setMensagem(null);
      this.verifica = true;
      this.exercicios = res;
    }, error => {
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  deletar(id) {
    this.exercicioService.deletar(id).subscribe(res => {
      this.mensagemService.setMensagem(res.mensagem);
      this.lista();
    }, error => {
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  detalhes(id) {
    this.exercicioService.detalhes(id).subscribe(res => {
      this.exercicio = res;
    }, error => {
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  pegaId(id) {
    this.exercicio._id = id;
  }

  ngOnInit() {
  }
}
