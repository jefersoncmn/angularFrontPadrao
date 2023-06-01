import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule //Modulo Core que contém os módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
