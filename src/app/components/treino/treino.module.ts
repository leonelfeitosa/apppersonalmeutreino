import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { TreinoComponent } from './treino.component';
import { TreinoCadastroComponent } from './cadastro/treino-cadastro.component';
import {RouterModule} from '@angular/router';
import {SecretariaRoutes} from './treino.routing';
import {SharedModule} from '../../shared/shared.module';
import { TreinoListaComponent } from './lista/treino-lista.component';
import { QuillEditorModule } from 'ngx-quill-editor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SecretariaRoutes),
    SharedModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule,
    QuillEditorModule
  ],
  declarations: [TreinoCadastroComponent, TreinoComponent, TreinoListaComponent]
})
export class TreinoModule { }