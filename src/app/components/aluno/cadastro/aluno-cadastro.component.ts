import { Component, OnInit } from '@angular/core';
import { AlunoComponent } from '../aluno.component';
import { AlunoService } from '../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from '../../mensagem.service';
import { PaginaService } from '../../pagina.service';

@Component({
  selector: 'app-aluno-component',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent implements OnInit {

  aluno: AlunoComponent = new AlunoComponent;
  mensagemErro: string;
  mensagemSucesso: string;
  editando: boolean = false;
  alteraSenha: boolean = true;
  confirmarSenha: string;
  erroSenha: string;
  cpfTeste: string;
  voltarUrl: string;
  mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private _router: Router,
    private mensagemService: MensagemService,
    private paginaService: PaginaService
  ) {

    this.aluno._id = this.route.snapshot.paramMap.get("id");

    if (this.aluno._id) {
      this.detalhes(this.aluno._id);
      this.editando = true;
      this.alteraSenha = false;
      this.aluno.senha = "";
      this.confirmarSenha = "";
    }
    this.paginaService.alteraPaginas();
    this.voltarUrl = localStorage.getItem("paginaAnterior");
  }

  cadastrar() {
    if (this.verificaSenha()) {
      this.aluno.IMC = 0;
      this.alunoService.cadastro(this.aluno).subscribe(res => {
        this.mensagemService.setMensagem(res.mensagem);
        this._router.navigate(["/aluno/lista/"]);
      }, error => {
        let mensagem = { mensagem: 'erro', status: 'erro' };
        mensagem = JSON.parse(error.error);
        if (mensagem.mensagem)
          this.mensagemErro = mensagem.mensagem;
        else
          this.mensagemErro = mensagem.status;
      });
    }
  }

  editar() {
    if (this.verificaSenha()) {
      this.alunoService.editar(this.aluno).subscribe(res => {
        this.mensagemService.setMensagem(res.mensagem);
        this._router.navigate(["/aluno/lista/"]);
      }, error => {
        let mensagem = { mensagem: 'erro', status: 'erro' };
        mensagem = JSON.parse(error.error);
        if (mensagem.mensagem)
          this.mensagemErro = mensagem.mensagem;
        else
          this.mensagemErro = mensagem.status;
      });
    }
  }

  detalhes(id) {
    this.alunoService.detalhes(id).subscribe(res => {
      this.aluno = res;
      this.cpfTeste = this.aluno.cpf;
      this.aluno.senha = "";
      this.confirmarSenha = "";
    }, error => {
      let mensagem = { mensagem: 'erro', status: 'erro' };
      mensagem = JSON.parse(error.error);
      if (mensagem.mensagem)
        this.mensagemErro = mensagem.mensagem;
      else
        this.mensagemErro = mensagem.status;
    });
  }

  verificaSenha() {
    if (this.aluno.senha != this.confirmarSenha) {
      this.mensagemErro = "A senha está diferente do confirmar senha.";
      return false;
    } else {
      return true;
    }
  }

  alterarSenha() {
    this.alteraSenha = true;
  }

  mascaraCPF(cpf) {
    const cpfMascara = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
    return cpfMascara;
  }
  
  ngOnInit() {
  }

}
