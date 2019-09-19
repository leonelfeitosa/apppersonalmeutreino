import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { EvolucaoComponent } from './evolucao.component';
import { EvolucaoCadastroComponent } from './cadastro/evolucao-cadastro.component';
import { EvolucaoListaComponent } from './lista/evolucao-lista.component';
import {RouterModule} from '@angular/router';
import {EvolucaoRoutes} from './evolucao.routing';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EvolucaoRoutes),
    SharedModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule
  ],
  declarations: [EvolucaoCadastroComponent, EvolucaoComponent, EvolucaoListaComponent]
})
export class EvolucaoModule { }