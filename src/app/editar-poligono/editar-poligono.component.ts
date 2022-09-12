import { Component, OnInit } from '@angular/core';
import { Poligono } from '../poligono';
import {  ActivatedRoute } from '@angular/router';
import { PoligonoService } from '../poligono.service';

@Component({
  selector: 'app-editar-poligono',
  templateUrl: './editar-poligono.component.html',
  styleUrls: ['./editar-poligono.component.css']
})
export class EditarPoligonoComponent implements OnInit {

  poligono = {id: 0, lados: 0, tamanho: 0} as Poligono;
  id!: number;
  lados!: number
  tamanho!: number
  data1 = '';
  data2 = '';

  constructor(private route: ActivatedRoute, ) { }

  ngOnInit(): void {
      this.id = Number(this.route.snapshot.queryParamMap.get('id'));
      this.lados = Number(this.route.snapshot.queryParamMap.get('lados'));
      this.tamanho = Number(this.route.snapshot.queryParamMap.get('tamanho'));
      this.data1 = ''+this.route.snapshot.queryParamMap.get('criado');
      this.data2 = ''+this.route.snapshot.queryParamMap.get('modificado');
  }

  salvar(): void{
    
  }

}
