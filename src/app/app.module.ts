import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaDePoligonosComponent } from './lista-de-poligonos/lista-de-poligonos.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ListaDePoligonosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
