import { Component, OnInit } from '@angular/core';
import { EducadorComponent } from '../educador.component';
import { EducadorService } from '../educador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from '../../mensagem.service';
import { PaginaService } from '../../pagina.service';

@Component({
  selector: 'app-educador-component',
  templateUrl: './educador-cadastro.component.html',
  styleUrls: ['./educador-cadastro.component.css']
})
export class EducadorCadastroComponent implements OnInit {

  educador: EducadorComponent = new EducadorComponent;
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
    private educadorService: EducadorService,
    private route: ActivatedRoute,
    private _router: Router,
    private mensagemService: MensagemService,
    private paginaService: PaginaService
  ) {

    this.educador._id = localStorage.getItem("user");

    if (this.educador._id) {
      this.detalhes(this.educador._id);
      this.editando = true;
      this.alteraSenha = false;
      this.educador.senha = "";
      this.confirmarSenha = "";
    }
    this.paginaService.alteraPaginas();
    this.voltarUrl = localStorage.getItem("paginaAnterior");
  }

  editar() {
    if (this.verificaSenha()) {
      this.educadorService.editar(this.educador).subscribe(res => {
        this.mensagemService.setMensagem(res.mensagem);
        if (this.educador.senha != "" && this.educador.cpf != this.cpfTeste || this.educador.senha != "" || this.educador.cpf != this.cpfTeste) {
          this._router.navigate(['/authentication/logout']);
        } else
          this.detalhes(this.educador._id);
          this.mensagemSucesso = this.mensagemService.getMensagem();
          this.mensagemService.setMensagem(null);
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
    this.educadorService.detalhes(id).subscribe(res => {
      this.educador = res;
      this.cpfTeste = this.educador.cpf;
      this.educador.senha = "";
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
    if (this.educador.senha != this.confirmarSenha) {
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
