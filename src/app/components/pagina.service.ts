import { Injectable, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable()
export class PaginaService {
    location: Location;
    url = environment.apiURL;

    constructor(location: Location) {
        this.location = location;
    }

    alteraPaginas() {
        let paginaAtual = localStorage.getItem('paginaAtual');
        localStorage.setItem('paginaAtual', this.location.path());
        if(paginaAtual != this.location.path()){
            if(paginaAtual){
                localStorage.setItem('paginaAnterior', paginaAtual);
            }else{
                localStorage.setItem('paginaAnterior', this.url);
            }
        }
        
    }
}