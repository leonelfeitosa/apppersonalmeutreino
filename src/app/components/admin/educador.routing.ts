import {Routes} from '@angular/router';
import {EducadorCadastroComponent} from './cadastro/educador-cadastro.component';
import { EducadorListaComponent } from './lista/educador-lista.component';
import { EducadorListaInativosComponent } from './lista-inativos/educador-lista.component';

export const EducadorRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'educador'
    },
    children: [
      {
        path: 'cadastro',
        component: EducadorCadastroComponent,
        data: {
          title: 'Educador'
        },
      },
      {
        path: 'atualiza/:id',
        component: EducadorCadastroComponent,
        data: {
          title: 'Educador'
        },
      },
      {
        path: 'lista',
        component: EducadorListaComponent,
        data: {
          title: 'Educador'
        },
      },
      {
        path: 'lista-inativos',
        component: EducadorListaInativosComponent,
        data: {
          title: 'Educador'
        },
      }
    ]
  }
]
