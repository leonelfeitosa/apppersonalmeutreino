import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoComponent } from '../aluno.component';
import { MensagemService } from '../../mensagem.service';
import { PaginaService } from '../../pagina.service';

@Component({
  selector: 'app-basic',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})
export class AlunoListaInativosComponent implements OnInit {
  alunos: AlunoComponent [];
  aluno: AlunoComponent = new AlunoComponent;
  mensagemSucesso: string;
  mensagemErro: string;
  perfil: string;
  voltarUrl: string;
  nome: String;
  pesquisa: string;
  
  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private _router: Router,
    private mensagemService: MensagemService,
    private paginaService: PaginaService
  ) {
    this.perfil = localStorage.getItem("perfilASG");
    this.lista();
    this.paginaService.alteraPaginas();
    this.voltarUrl = localStorage.getItem("paginaAnterior");
  }

  lista() {
    this.alunoService.listaInativos().subscribe(res => {
      this.mensagemSucesso = this.mensagemService.getMensagem();
      this.mensagemService.setMensagem(null);
      this.alunos = res;
    }, error =>{
      let mensagem = {mensagem: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  ativar(id) {
    this.alunoService.ativarAluno(id).subscribe(res => {
      this.mensagemService.setMensagem(res.mensagem);
      this.lista();
    }, error =>{
      let mensagem = {mensagem: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  detalhes(id) {
    this.alunoService.detalhes(id).subscribe(res => {
      this.aluno = res;
    }, error =>{
      let mensagem = {mensagem: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
   }

   mascaraCPF(cpf) {
     const cpfMascara = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
     return cpfMascara;
   }

  ngOnInit() {
  }

}
