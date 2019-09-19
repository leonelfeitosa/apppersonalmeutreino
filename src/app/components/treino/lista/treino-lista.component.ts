import { Component, OnInit } from '@angular/core';
import { TreinoService } from '../treino.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TreinoComponent } from '../treino.component';
import { MensagemService } from '../../mensagem.service';
import { PaginaService } from '../../pagina.service';
import { AlunoComponent } from '../../aluno/aluno.component';

@Component({
  selector: 'app-basic',
  templateUrl: './treino-lista.component.html',
  styleUrls: ['./treino-lista.component.css']
})
export class TreinoListaComponent implements OnInit {
  treinos: TreinoComponent;
  treinosItens: TreinoComponent [];
  treino: TreinoComponent = new TreinoComponent;
  aluno: AlunoComponent = new AlunoComponent;
  mensagemSucesso: string;
  mensagemErro: string;
  mensagem: string;
  perfil: string;
  voltarUrl: string;
  verifica: boolean = false;
  id_item: string;
  msg: string;
  exerciciosTreino = [];
  mensagemExercicio: string;
  tamExercicios: any;
  aluno_id: any;

  constructor(
    private treinoService: TreinoService,
    private route: ActivatedRoute,
    private _router: Router,
    private mensagemService: MensagemService,
    private paginaService: PaginaService
  ) {
    this.treino.aluno_id = this.route.snapshot.paramMap.get('aluno_id');
    this.aluno_id = this.treino.aluno_id;
    this.lista();
    this.paginaService.alteraPaginas();
    this.voltarUrl = localStorage.getItem("paginaAnterior");
  }

  lista() {
    this.treinoService.lista(this.treino.aluno_id).subscribe(res => {
      this.mensagemSucesso = this.mensagemService.getMensagem();
      this.mensagemService.setMensagem(null);
      this.treino = res.treino;
      this.treinosItens = res.treinos;
      this.verifica = true;
      if(this.treino == null) {
        this.mensagem = "O Aluno não possui nenhum treino";
        this.verifica = false;
      }
    }, error =>{
      let mensagem = {mensagem: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  listaExerciciosTreino(id: string) {
    this.mensagemSucesso = '';
    this.exerciciosTreino = [];
    this.treinoService.listaExerciciosTreino(id).subscribe(res => {
      this.exerciciosTreino = res;
      this.tamExercicios = this.exerciciosTreino.length;
     }, error =>{
      let mensagem = {mensagem: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  ordenaExerciciosMais(i:any) {
    if(i == this.tamExercicios - 1){}
    else {
      let exercicio = this.exerciciosTreino[i + 1];
      this.exerciciosTreino[i + 1] = this.exerciciosTreino[i];
      this.exerciciosTreino[i] = exercicio;
    }
  }

  ordenaExerciciosMenos(i:any) {
    if(i == 0){}
    else {
      let exercicio = this.exerciciosTreino[i - 1];
      this.exerciciosTreino[i - 1] = this.exerciciosTreino[i];
      this.exerciciosTreino[i] = exercicio;
    }
  }

  salvaOrdenacaoExercicio() {
    this.mensagemSucesso = '';
    const lista = { lista: this.exerciciosTreino };
    this.treinoService.ordenaExercicioSalva(lista).subscribe(res => {
      this.mensagemSucesso = res.mensagem;
      this.exerciciosTreino = [];
      this.listaExerciciosTreino(lista[0].treino_id);
    }, error =>{
      console.log(error);
      let mensagem = {mensagem: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  deletarExercicioTreino(id, item_treino_id) {
    this.treinoService.deletarExercicioTreino(id).subscribe(res => {
      this.mensagemExercicio = res.mensagem;
      this.listaExerciciosTreino(item_treino_id);
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
    this.treinoService.deletar(id).subscribe(res => {
      this.mensagemService.setMensagem(res.mensagem);
      this._router.navigate(["/aluno/lista/"]);
    }, error =>{
      let mensagem = {mensagem: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  deletarTreino(id) {
    this.treinoService.deletarItem(id).subscribe(res => {
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
    this.treinoService.detalhes(id).subscribe(res => {
      this.treino = res;
    }, error =>{
      let mensagem = {mensagem: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
   }

   pegaId(id) {
     this.id_item = id;
   }

   atualizaMsg() {
    this.treinoService.editarMsg(this.treino.aluno_id, this.msg).subscribe(res => {
      this.mensagem = res.mensagem;
    });
  }

  buscaMsg() {
    this.treinoService.buscaMsg(this.treino.aluno_id).subscribe(res => {
      this.aluno = res;
    });
  }

  ngOnInit() {
  }

}
