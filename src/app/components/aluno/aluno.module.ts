import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { AlunoComponent } from './aluno.component';
import { AlunoCadastroComponent } from './cadastro/aluno-cadastro.component';
import { AlunoListaComponent } from './lista/aluno-lista.component';
import {RouterModule} from '@angular/router';
import {AlunoRoutes} from './aluno.routing';
import {SharedModule} from '../../shared/shared.module';
import { AdminSearchPipe, AdminSearchPipep } from '../component-pipe/admin-seach-pipe';
import { AlunoListaInativosComponent } from './lista-inativos/aluno-lista.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AlunoRoutes),
    SharedModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule
  ],
  declarations: [AlunoCadastroComponent, AlunoComponent, AlunoListaComponent, AdminSearchPipe, AdminSearchPipep, AlunoListaInativosComponent]
})
export class AlunoModule { }