import {Routes} from '@angular/router';
import {EvolucaoCadastroComponent} from './cadastro/evolucao-cadastro.component';
import { EvolucaoListaComponent } from './lista/evolucao-lista.component';

export const EvolucaoRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Evolução'
    },
    children: [
      {
        path: 'cadastro/:aluno_id',
        component: EvolucaoCadastroComponent,
        data: {
          title: 'Evolução'
        },
      },
      {
        path: 'atualizar/:id/:aluno_id',
        component: EvolucaoCadastroComponent,
        data: {
          title: 'Evolução'
        },
      },
      {
        path: 'lista/:aluno_id',
        component: EvolucaoListaComponent,
        data: {
          title: 'Evolução'
        },
      }
    ]
  }
]
