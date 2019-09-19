import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http/src/headers';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class MensagemService {

 mensagem: string;

 getMensagem(){
    return this.mensagem;
  }

  setMensagem(mensagem) {
    this.mensagem = mensagem;
  }
}