import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LoginGuard } from './login-guard';
import { LoginGuardAdmin } from './login-guard-admin';

export const AppRoutes: Routes = [{
  path: '',
  component: AdminLayoutComponent,
  canActivate: [LoginGuard],
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
      path: 'educador',
      loadChildren: './components/educador/educador.module#EducadorModule'
    },
    {
      path: 'aluno',
      loadChildren: './components/aluno/aluno.module#AlunoModule'
    },
    {
      path: 'evolucao',
      loadChildren: './components/evolucao/evolucao.module#EvolucaoModule'
    },
    {
      path: 'treino',
      loadChildren: './components/treino/treino.module#TreinoModule'
    },
    {
      path: 'exercicios',
      loadChildren: './components/exercicio/exercicio.module#ExercicioModule'
    },
    {
      path: 'basic',
      loadChildren: './components/basic/basic.module#BasicModule'
    }, {
      path: 'advance',
      loadChildren: './components/advance/advance.module#AdvanceModule'
    }, {
      path: 'forms',
      loadChildren: './components/forms/forms.module#FormsModule'
    }, {
      path: 'bootstrap-table',
      loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
    }, {
      path: 'map',
      loadChildren: './map/map.module#MapModule',
    }, {
      path: 'simple-page',
      loadChildren: './simple-page/simple-page.module#SimplePageModule'
    }
  ],
},
{
  path: '',
  component: AdminLayoutComponent,
  canActivate: [ LoginGuardAdmin ],
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
        path: 'admin',
        loadChildren: './components/admin/educador.module#EducadorModule'
    }
  ]
},
{
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'authentication',
      loadChildren: './authentication/authentication.module#AuthenticationModule'
    }
  ]
}, {
  path: '**',
  redirectTo: 'error/404'
}];
