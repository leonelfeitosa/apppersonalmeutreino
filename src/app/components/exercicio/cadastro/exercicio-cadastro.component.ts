import { Component, OnInit } from '@angular/core';
import { ExercicioComponent } from '../exercicio.component';
import { ExercicioService } from '../exercicio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from '../../mensagem.service';
import { PaginaService } from '../../pagina.service';

@Component({
  selector: 'app-exercicio-component',
  templateUrl: './exercicio-cadastro.component.html',
  styleUrls: ['./exercicio-cadastro.component.css']
})
export class ExercicioCadastroComponent implements OnInit {

  exercicio: ExercicioComponent = new ExercicioComponent;
  mensagemErro: string;
  mensagem: string;
  editando: boolean = false;
  voltarUrl: string;
  
  constructor(
    private exercicioService: ExercicioService,
    private route: ActivatedRoute,
    private _router: Router,
    private mensagemService: MensagemService,
    private paginaService: PaginaService
  ) {
    this.exercicio._id = this.route.snapshot.paramMap.get('id');

    if (this.exercicio._id) {
      this.detalhes(this.exercicio._id);
      this.editando = true;
    }
  
    this.paginaService.alteraPaginas();
    this.voltarUrl = localStorage.getItem("paginaAnterior");
  }

  cadastrar() {
    this.exercicioService.cadastro(this.exercicio).subscribe(res => {
      this.mensagemErro = null;
      this.mensagemService.setMensagem(res.mensagem);
      this._router.navigate(["/exercicios/lista/"]);
    }, error => {
      this.mensagem = null;
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  editar() {
    this.exercicioService.editar(this.exercicio).subscribe(res => {
      this.mensagemService.setMensagem(res.mensagem);
      this._router.navigate(["/exercicios/lista/"]);
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

  ngOnInit() {
  }
}
