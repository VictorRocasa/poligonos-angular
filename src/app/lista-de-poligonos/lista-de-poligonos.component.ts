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

}
