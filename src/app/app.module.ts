import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import {ScrollModule} from './scroll/scroll.module';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import { EducadorService } from './components/educador/educador.service';
import { AlunoService } from './components/aluno/aluno.service';
import { MensagemService } from './components/mensagem.service';
import { TreinoService } from './components/treino/treino.service';
import { EvolucaoService } from './components/evolucao/evolucao.service';
import {LoginGuard} from './login-guard';
import { PaginaService } from './components/pagina.service';
import { LoginGuardAdmin } from './login-guard-admin';
import { ExercicioService } from './components/exercicio/exercicio.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    BreadcrumbsComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpModule,
    HttpClientModule,
    ScrollModule
  ],
  exports: [ScrollModule],
  providers: [
      EducadorService,
      AlunoService,
      MensagemService,
      TreinoService,
      EvolucaoService,
      LoginGuard,
      LoginGuardAdmin,
      PaginaService,
      ExercicioService,
      { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
