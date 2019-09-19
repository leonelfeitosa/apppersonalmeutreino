import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(DashboardRoutes),
      SharedModule,
      NgbModule
  ],
  declarations: [DashboardComponent]
})

export class DashboardModule {}
