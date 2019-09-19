import { Component, OnInit } from '@angular/core';
import { EvolucaoComponent } from '../evolucao.component';
import { EvolucaoService } from '../evolucao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from '../../mensagem.service';
import { PaginaService } from '../../pagina.service';

@Component({
  selector: 'app-evolucao-component',
  templateUrl: './evolucao-cadastro.component.html',
  styleUrls: ['./evolucao-cadastro.component.css']
})
export class EvolucaoCadastroComponent implements OnInit {

  evolucao: EvolucaoComponent = new EvolucaoComponent;
  mensagemErro: string;
  mensagemSucesso: string;
  editando: boolean = false;
  voltarUrl: string;
  mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(
    private evolucaoService: EvolucaoService,
    private route: ActivatedRoute,
    private _router: Router,
    private mensagemService: MensagemService,
    private paginaService: PaginaService
  ) {
    this.evolucao.aluno_id = this.route.snapshot.paramMap.get("aluno_id");
    this.evolucao._id = this.route.snapshot.paramMap.get("id");

    if (this.evolucao._id) {
      this.detalhes(this.evolucao._id);
      this.editando = true;
    }
    this.paginaService.alteraPaginas();
    this.voltarUrl = localStorage.getItem("paginaAnterior");
  }

  cadastrar() {
    this.evolucaoService.cadastro(this.evolucao).subscribe(res => {
      this.mensagemService.setMensagem(res.mensagem);
      this._router.navigate(["/evolucao/lista/"+this.evolucao.aluno_id]);
    }, error => {
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  editar() {
    this.evolucaoService.editar(this.evolucao).subscribe(res => {
      this.mensagemService.setMensagem(res.mensagem);
      this._router.navigate(["/evolucao/lista/"+this.evolucao.aluno_id]);
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
    this.evolucaoService.detalhes(id).subscribe(res => {
      this.evolucao = res;
    }, error => {
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  ngOnInit() {
  }

}
