import {Routes} from '@angular/router';
import {EducadorCadastroComponent} from './cadastro/educador-cadastro.component';

export const EducadorRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'educador'
    },
    children: [
      {
        path: '',
        component: EducadorCadastroComponent,
        data: {
          title: 'Educador'
        },
      }
    ]
  }
]
