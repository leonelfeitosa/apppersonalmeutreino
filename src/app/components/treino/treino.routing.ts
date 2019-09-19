import {Routes} from '@angular/router';
import { TreinoCadastroComponent  } from './cadastro/treino-cadastro.component';
import { TreinoListaComponent } from './lista/treino-lista.component';

export const SecretariaRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Treino'
    },
    children: [
      {
        path: 'cadastro/:aluno_id',
        component: TreinoCadastroComponent,
        data: {
          title: 'Treino'
        },
      },
      {
        path: 'add/:t_id',
        component: TreinoCadastroComponent,
        data: {
          title: 'Treino'
        },
      },
      {
        path: 'atualizardescricao/:id_desc',
        component: TreinoCadastroComponent,
        data: {
          title: 'Treino'
        },
      },
      {
        path: 'atualizartreino/:id_treino/:id_descricao',
        component: TreinoCadastroComponent,
        data: {
          title: 'Treino'
        },
      },
      {
        path: 'lista/:aluno_id',
        component: TreinoListaComponent,
        data: {
          title: 'Treino'
        },
      },
    ]
  }
]
