import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDePoligonosComponent } from './lista-de-poligonos/lista-de-poligonos.component';
import { FormularioPoligonoComponent } from './formulario-poligono/formulario-poligono.component';
import { EditarPoligonoComponent } from './editar-poligono/editar-poligono.component';
import { FormasComponent } from './formas/formas.component';

const routes: Routes = [
  { path: '', redirectTo: '/poligonos', pathMatch: 'full' },
  { path: 'poligonos', component: ListaDePoligonosComponent },
  { path: 'novo', component: FormularioPoligonoComponent },
  { path: 'editar', component: EditarPoligonoComponent },
  { path: 'formas', component: FormasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }