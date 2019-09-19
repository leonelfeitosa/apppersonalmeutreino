import { Routes } from '@angular/router';

import { ForgotComponent } from './forgot/forgot.component';
import {LockScreenComponent} from './lock-screen/lock-screen.component';
import {LogoutComponent} from './logout/logout.component';
import { ConsultaImprimirComponent } from './consulta-imprimir/imprimir/consulta-imprimir.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        data: {
          breadcrumb: 'Login'
        }
      },
      {
        path: 'forgot',
        component: ForgotComponent,
        data: {
          breadcrumb: 'Forgot'
        }
      },
      {
        path: 'consulta-imprimir/:id',
        component: ConsultaImprimirComponent,
        data: {
          breadcrumb: 'Consulta'
        }
      },
      {
        path: 'consulta-imprimir/:id/:verifica_id',
        component: ConsultaImprimirComponent,
        data: {
          breadcrumb: 'Consulta'
        }
      },
      {
        path: 'logout',
        component: LogoutComponent,
        data: {
          breadcrumb: 'logout'
        }
      },
      {
      path: 'lock-screen',
      component: LockScreenComponent,
        data: {
          breadcrumb: 'Lock Screen'
        }
    }]
  }
];
