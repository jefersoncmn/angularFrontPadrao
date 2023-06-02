import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacaRoutingModule } from './vaca-routing.module';
import { VacasListComponent } from './vacas-list/vacas-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    VacasListComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    VacaRoutingModule,
    SharedModule
  ],
})

export class VacaModule { }
