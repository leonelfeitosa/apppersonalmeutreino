import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { EducadorComponent } from './educador.component';
import { EducadorCadastroComponent } from './cadastro/educador-cadastro.component';
import {RouterModule} from '@angular/router';
import {EducadorRoutes} from './educador.routing';
import {SharedModule} from '../../shared/shared.module';
import { EducadorService } from './educador.service';
import { EducadorListaComponent } from './lista/educador-lista.component';
import { AdminSearchPipeAdmin } from '../component-pipe/admin-seach-pipe';
import { EducadorListaInativosComponent } from './lista-inativos/educador-lista.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EducadorRoutes),
    SharedModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule
  ],
  declarations: [EducadorCadastroComponent, EducadorComponent, EducadorListaComponent, EducadorListaInativosComponent, AdminSearchPipeAdmin],
  providers: [EducadorService]
})
export class EducadorModule { }