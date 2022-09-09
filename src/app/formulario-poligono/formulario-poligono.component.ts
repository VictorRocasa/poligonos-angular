import { Component, OnInit } from '@angular/core';

import { Poligono } from '../poligono';
import { PoligonoService } from '../poligono.service';

@Component({
  selector: 'app-formulario-poligono',
  templateUrl: './formulario-poligono.component.html',
  styleUrls: ['./formulario-poligono.component.css']
})
export class FormularioPoligonoComponent implements OnInit {

  constructor(private poligonoService: PoligonoService) { }

  ngOnInit(): void {
  }

  add(poligono: Poligono) : void{
    alert('funfo')
  }

  editar() : void{

  }

}
