import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modulos importantes para o funcionamento do sistema */
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [ //Exportar os módulo para outros módulos importam o módulo Core
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class CoreModule { }
