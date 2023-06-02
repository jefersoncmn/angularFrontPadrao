import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modulos importantes para o funcionamento do sistema */

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [ //Exportar os módulo para outros módulos importam o módulo Core
    HttpClientModule,
  ]
})
export class CoreModule { }
