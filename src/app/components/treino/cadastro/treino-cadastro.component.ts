import { Component, OnInit } from '@angular/core';
import { TreinoComponent } from '../treino.component';
import { TreinoService } from '../treino.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from '../../mensagem.service';
import { PaginaService } from '../../pagina.service';
import { ExercicioService } from '../../exercicio/exercicio.service';
import { } from 'jquery';

@Component({
  selector: 'app-treino-component',
  templateUrl: './treino-cadastro.component.html',
  styleUrls: ['./treino-cadastro.component.css']
})
export class TreinoCadastroComponent implements OnInit {

  treino: TreinoComponent = new TreinoComponent;
  exercicios: any[];
  mensagemErro: string;
  mensagem: string;
  editando: boolean = false;
  voltarUrl: string;
  id_desc: string;
  id_treino: string;
  id_descricao: string;
  exercicio_id: any;
  intensidade: any;
  exerciciosLista = [];
  mensagemAdd: string;
  teste: boolean = false;
  exerciciosTreino = [];
  mensagemExercicio: string;
  mensagemExercicioJaExiste: string;
  public editorOptions = {
    placeholder: "Descrição do Treino"
  };

  public editorOptionsT = {
    placeholder: "Treino"
  };

  mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  maskTelCel = [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  maskTelFixo = [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private treinoService: TreinoService,
    private exercicioService: ExercicioService,
    private route: ActivatedRoute,
    private _router: Router,
    private mensagemService: MensagemService,
    private paginaService: PaginaService
  ) {
    this.treino.aluno_id = this.route.snapshot.paramMap.get('aluno_id');
    this.id_desc = this.route.snapshot.paramMap.get('id_desc');
    this.id_treino = this.route.snapshot.paramMap.get('id_treino');
    this.id_descricao = this.route.snapshot.paramMap.get('id_descricao');
    this.treino.treino_id = this.route.snapshot.paramMap.get('t_id');
    this.lista();
    if (this.id_desc) {
      this.detalhes(this.id_desc);
      this.editando = true;
    }
    if (this.id_treino) {
      this.treino.treino_id = this.id_treino;
      this.detalhesTreino(this.id_treino);
      this.detalhesIdAluno(this.id_descricao);
      this.editando = true;
      this.listaExerciciosTreino();
    }

    this.paginaService.alteraPaginas();
    this.voltarUrl = localStorage.getItem("paginaAnterior");
  }

  addExercicios() {
    this.mensagemAdd = '';
    if (this.exercicio_id) {
      //if(this.verificaExercicioExiste(this.exercicio_id)) { 
      this.exerciciosLista.push({ exercicio_id: this.exercicio_id, intensidade: this.intensidade });
      this.mensagemAdd = 'Exercício adicionado.'
      //} else this.mensagemExercicioJaExiste = 'Exercício já adicionado.';
    }
    this.teste = false;
    this.exercicio_id = null;
    this.intensidade = null;
    this.teste = true;
  }

  /*
  verificaExercicioExiste(exercicio_id) {
    const verifica = this.exerciciosLista.find(res => res.exercicio_id == exercicio_id);
    if(verifica == null) return true;
  }
*/

  cadastrar() {
    const treino = { descricao: this.treino.descricao, aluno_id: this.treino.aluno_id };
    this.treinoService.cadastro(treino).subscribe(res => {
      this.treino.treino_id = res._id;
      this.mensagem = "Descrição Inserida, agora cadastre os treinos.";
      this.mensagemErro = null;
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

  cadastrarItem() {
    this.treino.exercicios = this.exerciciosLista;
    this.treinoService.cadastroItem(this.treino).subscribe(res => {
      this.mensagem = "";
      this.mensagem = "Inserido com sucesso.";
      this.treino.nome = "";
      this.treino.treino = "";
      this.mensagemErro = null;
      this.exerciciosLista = [];
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
    this.treinoService.editar(this.treino).subscribe(res => {
      this.mensagemService.setMensagem(res.mensagem);
      this._router.navigate(["/treino/lista/" + this.treino.aluno_id]);
    }, error => {
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  editarTreino() {
    this.treino.exercicios = this.exerciciosLista;
    this.treinoService.editarItem(this.treino).subscribe(res => {
      this.mensagemService.setMensagem(res.mensagem);
      this._router.navigate(["/treino/lista/" + this.treino.aluno_id]);
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
    this.treinoService.detalhes(id).subscribe(res => {
      this.treino = res;
    }, error => {
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  detalhesIdAluno(id) {
    this.treinoService.detalhes(id).subscribe(res => {
      this.treino.aluno_id = res.aluno_id;
    }, error => {
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  detalhesTreino(id) {
    this.treinoService.detalhesTreino(id).subscribe(res => {
      this.treino = res;
    }, error => {
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  removeExercicio(i) {
    this.teste = false;
    this.exerciciosLista.splice(i, 1);
    this.teste = true;
  }

  retornaExercicio(id) {
    let dados = this.exercicios.find(function (element) {
      return element._id == id;
    });
    return dados.nomeExercicio;
  }

  lista() {
    this.exercicioService.lista().subscribe(res => {
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

  listaExerciciosTreino() {
    this.treinoService.listaExerciciosTreino(this.id_treino).subscribe(res => {
      this.exerciciosTreino = res;
    }, error => {
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  deletarExercicioTreino(id) {
    this.treinoService.deletarExercicioTreino(id).subscribe(res => {
      this.mensagemExercicio = res.mensagem;
      this.listaExerciciosTreino();
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
