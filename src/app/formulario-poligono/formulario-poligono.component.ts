import { Component, OnInit } from '@angular/core';

import { Poligono } from '../poligono';
import { PoligonoService } from '../poligono.service';

import {Router} from '@angular/router'; 

@Component({
  selector: 'app-formulario-poligono',
  templateUrl: './formulario-poligono.component.html',
  styleUrls: ['./formulario-poligono.component.css']
})
export class FormularioPoligonoComponent implements OnInit {

  poligono?: Poligono;

  constructor(private poligonoService: PoligonoService, private router: Router) { }

  ngOnInit(): void {
    
  }

}
