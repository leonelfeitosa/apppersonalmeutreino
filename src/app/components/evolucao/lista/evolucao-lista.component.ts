import { Component, OnInit } from '@angular/core';
import { EvolucaoService } from '../evolucao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EvolucaoComponent } from '../evolucao.component';
import { MensagemService } from '../../mensagem.service';
import { PaginaService } from '../../pagina.service';

@Component({
  selector: 'app-basic',
  templateUrl: './evolucao-lista.component.html',
  styleUrls: ['./evolucao-lista.component.css']
})
export class EvolucaoListaComponent implements OnInit {
  evolucaos: EvolucaoComponent [];
  evolucao: EvolucaoComponent = new EvolucaoComponent;
  mensagemSucesso: string;
  mensagemErro: string;
  perfil: string;
  voltarUrl: string;
  aluno_id: string;

  constructor(
    private evolucaoService: EvolucaoService,
    private route: ActivatedRoute,
    private _router: Router,
    private mensagemService: MensagemService,
    private paginaService: PaginaService
  ) {
    this.aluno_id = this.route.snapshot.paramMap.get("aluno_id");
    this.lista();
    this.paginaService.alteraPaginas();
    this.voltarUrl = localStorage.getItem("paginaAnterior");
  }

  lista() {
    this.evolucaoService.lista(this.aluno_id).subscribe(res => {
      this.mensagemSucesso = this.mensagemService.getMensagem();
      this.mensagemService.setMensagem(null);
      this.evolucaos = res;
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
    this.evolucaoService.deletar(id).subscribe(res => {
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
    this.evolucaoService.detalhes(id).subscribe(res => {
      this.evolucao = res;
    }, error =>{
      let mensagem = {mensagem: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
   }

  ngOnInit() {
  }

}
