import { Component, OnInit } from '@angular/core';
import { EducadorService } from '../educador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EducadorComponent } from '../educador.component';
import { MensagemService } from '../../mensagem.service';
import { PaginaService } from '../../pagina.service';

@Component({
  selector: 'app-basic',
  templateUrl: './educador-lista.component.html',
  styleUrls: ['./educador-lista.component.css']
})
export class EducadorListaComponent implements OnInit {
  educadores: EducadorComponent [];
  educador: EducadorComponent = new EducadorComponent;
  mensagemSucesso: string;
  mensagemErro: string;
  perfil: string;
  voltarUrl: string;
  nome: String;
  pesquisa: string;
  
  constructor(
    private educadorService: EducadorService,
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
    this.educadorService.lista().subscribe(res => {
      this.mensagemSucesso = this.mensagemService.getMensagem();
      this.mensagemService.setMensagem(null);
      this.educadores = res;
    }, error =>{
      let mensagem = {mensagem: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  deletar(id) {
    this.educadorService.deleta(id).subscribe(res => {
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
    this.educadorService.detalhes(id).subscribe(res => {
      this.educador = res;
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
