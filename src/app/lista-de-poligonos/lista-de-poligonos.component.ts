import { Component, OnInit } from '@angular/core';

import { Poligono } from '../poligono';
import { PoligonoService } from '../poligono.service';

import {Router} from '@angular/router'; 

@Component({
  selector: 'app-lista-de-poligonos',
  templateUrl: './lista-de-poligonos.component.html',
  styleUrls: ['./lista-de-poligonos.component.css']
})
export class ListaDePoligonosComponent implements OnInit {

  poligonos: Poligono[] = [];
  selectedPoligono?: Poligono;

  constructor(private poligonoService: PoligonoService, private router:Router) { }

  ngOnInit(): void {
    this.getPoligonos();
  }

  getPoligonos(): void{
    this.poligonoService.getPoligonos().subscribe(poligonos => this.poligonos = poligonos)
  }

  onSelect(poligono: Poligono): void {
    this.selectedPoligono = poligono;
  }

  add() : void{
    this.router.navigate(['/novo-poligono'])
  }

  editar() : void{
    if(this.selectedPoligono === undefined)
        alert('Selecione algum poligono para editar!');
    else{
      this.router.navigate(['/formulario-poligonos'], {state: {}});
    }
  }

  apagar(poligono: Poligono) : void{
    if(confirm('Deseja apagar permanentemente o poligono de Id = '+poligono.id+'?')){
      this.poligonos = this.poligonos.filter(h => h != poligono);
      this.poligonoService.deletarPoligono(poligono.id).subscribe();
    }
  }

}
