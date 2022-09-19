import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDePoligonosComponent } from './lista-de-poligonos/lista-de-poligonos.component';
import { FormularioPoligonoComponent } from './formulario-poligono/formulario-poligono.component';
import { EditarPoligonoComponent } from './editar-poligono/editar-poligono.component';
import { FormasComponent } from './formas/formas.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { DetalhesFormaComponent } from './detalhes-forma/detalhes-forma.component';

const routes: Routes = [
  { path: '', redirectTo: '/poligonos', pathMatch: 'full' },
  { path: 'poligonos', component: ListaDePoligonosComponent },
  { path: 'poligonos/novo', component: FormularioPoligonoComponent },
  { path: 'poligonos/editar', component: EditarPoligonoComponent },
  { path: 'poligonos/estoque', component: EstoqueComponent },
  { path: 'formas', component: FormasComponent },
  { path: 'formas/detalhes', component: DetalhesFormaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }