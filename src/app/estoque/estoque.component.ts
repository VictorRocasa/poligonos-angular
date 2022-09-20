import { Component, OnInit } from '@angular/core';

import { ContadorPoligono } from '../contadorPoligono';
import { FormaFormatador } from '../formaFormatador';

import { PoligonoService } from '../poligono.service';
import { FormaService } from '../forma.service';
import { Poligono } from '../poligono';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  
  poligonos: ContadorPoligono[] = [];
  formas: FormaFormatador[] = [];

  constructor(private poligonoService: PoligonoService, private formaService: FormaService) { }

  ngOnInit(): void {
    this.listarEstoque();
  }
  
  listarEstoque() {
    this.poligonoService.listarEstoque().subscribe(poligonos => this.poligonos = poligonos);  
    this.formaService.listarEstoque().subscribe(formas => this.formas = formas);
  }

  getResumoPoligono(poligono: Poligono): string{
    return poligono.lados+' lados de tamanho '+poligono.tamanho;
  }

  add() {

  }

}
