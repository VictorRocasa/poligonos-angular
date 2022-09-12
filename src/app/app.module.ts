import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaDePoligonosComponent } from './lista-de-poligonos/lista-de-poligonos.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';
import { FormularioPoligonoComponent } from './formulario-poligono/formulario-poligono.component';
import { AppRoutingModule } from './app-routing.module';
import { BotaoVoltarComponent } from './botao-voltar/botao-voltar.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaDePoligonosComponent,
    FormularioPoligonoComponent,
    BotaoVoltarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
