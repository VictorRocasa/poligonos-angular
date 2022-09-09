import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDePoligonosComponent } from './lista-de-poligonos/lista-de-poligonos.component';
import { FormularioPoligonoComponent } from './formulario-poligono/formulario-poligono.component';

const routes: Routes = [
  { path: '', redirectTo: '/poligonos', pathMatch: 'full' },
  { path: 'poligonos', component: ListaDePoligonosComponent },
  { path: 'formulario-poligonos', component: FormularioPoligonoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }