import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ExercicioComponent } from './exercicio.component';
import { ExercicioCadastroComponent } from './cadastro/exercicio-cadastro.component';
import {RouterModule} from '@angular/router';
import {SecretariaRoutes} from './exercicio.routing';
import {SharedModule} from '../../shared/shared.module';
import { TreinoListaComponent } from './lista/exercicio-lista.component';
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
  declarations: [ExercicioCadastroComponent, ExercicioComponent, TreinoListaComponent]
})
export class ExercicioModule { }