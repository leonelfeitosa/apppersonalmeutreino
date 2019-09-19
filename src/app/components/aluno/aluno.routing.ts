import {Routes} from '@angular/router';
import {AlunoCadastroComponent} from './cadastro/aluno-cadastro.component';
import { AlunoListaComponent } from './lista/aluno-lista.component';
import { AlunoListaInativosComponent } from './lista-inativos/aluno-lista.component';

export const AlunoRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Aluno'
    },
    children: [
      {
        path: 'cadastro',
        component: AlunoCadastroComponent,
        data: {
          title: 'Aluno'
        },
      },
      {
        path: 'atualizar/:id',
        component: AlunoCadastroComponent,
        data: {
          title: 'Aluno'
        },
      },
      {
        path: 'lista',
        component: AlunoListaComponent,
        data: {
          title: 'Aluno'
        },
      },
      {
        path: 'lista-inativos',
        component: AlunoListaInativosComponent,
        data: {
          title: 'Aluno'
        },
      }
    ]
  }
]
