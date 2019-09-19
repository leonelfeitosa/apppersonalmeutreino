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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EducadorRoutes),
    SharedModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule
  ],
  declarations: [EducadorCadastroComponent, EducadorComponent]
})
export class EducadorModule { }