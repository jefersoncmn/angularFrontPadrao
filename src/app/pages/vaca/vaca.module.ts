import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacaRoutingModule } from './vaca-routing.module';
import { VacasListComponent } from './vacas-list/vacas-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VacasListComponent
  ],
  imports: [
    CommonModule,
    VacaRoutingModule,
    SharedModule
  ]
})
export class VacaModule { }
