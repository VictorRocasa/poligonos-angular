import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaDePoligonosComponent } from './lista-de-poligonos/lista-de-poligonos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDePoligonosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
