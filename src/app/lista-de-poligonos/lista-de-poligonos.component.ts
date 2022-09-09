import { Component, OnInit } from '@angular/core';

import { Poligono } from '../poligono';
import { PoligonoService } from '../poligono.service';

@Component({
  selector: 'app-lista-de-poligonos',
  templateUrl: './lista-de-poligonos.component.html',
  styleUrls: ['./lista-de-poligonos.component.css']
})
export class ListaDePoligonosComponent implements OnInit {

  poligonos: Poligono[] = [];
  selectedPoligono?: Poligono;

  constructor(private poligonoService: PoligonoService) { }

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
    
  }

  editar() : void{

  }

  apagar(poligono: Poligono) : void{
    if(confirm('Deseja apagar permanentemente o poligono de Id = '+poligono.id+'?')){
      this.poligonos = this.poligonos.filter(h => h != poligono);
      this.poligonoService.deletarPoligono(poligono.id).subscribe();
    }
  }

}
