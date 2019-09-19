import { Component, OnInit } from '@angular/core';
import { ConsultaComponent } from '../consulta.component';
import { ConsultaService } from '../consulta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from '../../../components/mensagem.service';

@Component({
  selector: 'app-consulta-imprimir',
  templateUrl: './consulta-imprimir.component.html',
  styleUrls: ['./consulta-imprimir.component.css']
})
export class ConsultaImprimirComponent implements OnInit {
  consulta: ConsultaComponent = new ConsultaComponent;
  mensagemErro: string;
  verificaId: string;

  constructor(
    private consultaService: ConsultaService,
    private route: ActivatedRoute,
    private _router: Router,
    private mensagemService: MensagemService
  ) {
    this.consulta._id = this.route.snapshot.paramMap.get('id');
    this.verificaId = this.route.snapshot.paramMap.get('verifica_id');
    this.buscaConsultaImprimir();
  }

  buscaConsultaImprimir() {
    this.consultaService.buscaConsultaImprimir(this.consulta._id).subscribe(res => {
       this.consulta = res;
    }, error => {
      let mensagem = {msg: 'erro', status: 'erro'};
      mensagem = JSON.parse(error.error);
      if(mensagem.msg)
        this.mensagemErro = mensagem.msg;
      else
        this.mensagemErro = mensagem.status;
    });
  }
  ngOnInit() {
  }

}
