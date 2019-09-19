import {Routes} from '@angular/router';
import {ConsultaImprimirComponent} from './imprimir/consulta-imprimir.component';

export const ConsultaRoutes: Routes = [
    {
        path: '',
        component: ConsultaImprimirComponent,
        data: {
            breadcrumb: 'Consulta Imprimir'
        }
    }
];
