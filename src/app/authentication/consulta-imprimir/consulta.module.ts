import {NgModule} from '@angular/core';
import {ConsultaImprimirComponent} from './imprimir/consulta-imprimir.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ConsultaRoutes} from './consulta.routing';
import {SharedModule} from '../../shared/shared.module';
import {ConsultaService} from './consulta.service';
import {ConsultaComponent} from './consulta.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ConsultaRoutes),
        SharedModule
    ],
    declarations: [ConsultaComponent],
    providers: [ConsultaService]
})

export class ConsultaModule {}
