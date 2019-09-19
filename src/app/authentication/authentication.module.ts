import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutes } from './authentication.routing';
import { ForgotComponent } from './forgot/forgot.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import {LogoutComponent} from './logout/logout.component';
import { ConsultaImprimirComponent } from './consulta-imprimir/imprimir/consulta-imprimir.component';
import {ConsultaService} from './consulta-imprimir/consulta.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ConsultaService],
  declarations: [ForgotComponent, LockScreenComponent, LogoutComponent, ConsultaImprimirComponent]
})

export class AuthenticationModule {}

