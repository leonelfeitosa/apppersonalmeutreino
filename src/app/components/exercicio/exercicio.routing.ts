import {Routes} from '@angular/router';
import { ExercicioCadastroComponent  } from './cadastro/exercicio-cadastro.component';
import { TreinoListaComponent } from './lista/exercicio-lista.component';

export const SecretariaRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Exercício'
    },
    children: [
      {
        path: 'cadastro',
        component: ExercicioCadastroComponent,
        data: {
          title: 'Exercício'
        },
      },
      {
        path: 'atualiza/:id',
        component: ExercicioCadastroComponent,
        data: {
          title: 'Exercício'
        },
      },
      {
        path: 'lista',
        component: TreinoListaComponent,
        data: {
          title: 'Exercício'
        },
      },
    ]
  }
]
