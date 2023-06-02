import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VacasListComponent } from './vacas-list/vacas-list.component';

const routes: Routes = [
  { path:'', component: VacasListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacaRoutingModule { }
