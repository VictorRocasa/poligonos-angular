import { Component, OnInit } from '@angular/core';
import { ContadorPoligono } from '../contadorPoligono';

import { PoligonoService } from '../poligono.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
  
  poligonos: ContadorPoligono[] = [];

  constructor(private poligonoService: PoligonoService) { }

  ngOnInit(): void {
    this.listarEstoque();
  }
  
  listarEstoque() {
    this.poligonoService.listarEstoque().subscribe(poligonos => this.poligonos = poligonos)    
  }

}
