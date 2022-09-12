import { Component, OnInit } from '@angular/core';
import { Poligono } from '../poligono';
import {  ActivatedRoute } from '@angular/router';
import { PoligonoService } from '../poligono.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-poligono',
  templateUrl: './editar-poligono.component.html',
  styleUrls: ['./editar-poligono.component.css']
})
export class EditarPoligonoComponent implements OnInit {

  poligono = {id: 0, lados: 0, tamanho: 0} as Poligono;
  data1 = '';
  data2 = '';

  constructor(private route: ActivatedRoute, private poligonoService:PoligonoService, private location:Location) { }

  ngOnInit(): void {
      this.poligono.id = Number(this.route.snapshot.queryParamMap.get('id'));
      this.poligono.lados = Number(this.route.snapshot.queryParamMap.get('lados'));
      this.poligono.tamanho = Number(this.route.snapshot.queryParamMap.get('tamanho'));
      this.data1 = ''+this.route.snapshot.queryParamMap.get('criado');
      this.data2 = ''+this.route.snapshot.queryParamMap.get('modificado');
  }

  salvar(l:string, t:string): void{    
    t = t.replace(',','.');
    const regex = new RegExp('^[0-9]+(\.[0-9]+)?$');
    let teste = t.match(regex);
    if(teste === null){
      alert("Erro! Tamanho precisa ser um número real!");
      return;
    }
      let tamanho = Number(t);
      if(tamanho === 0){
        alert("Erro! Tamanho precisa maior que 0!");
        return;
      }
      let param:string = '/'+this.poligono.id;
      if(l!=''+this.poligono.lados){
        param += '?lados='+l;
        if(tamanho!=this.poligono.tamanho)
          param += '&tamanho='+tamanho;
      }
      else
        param += '?tamanho='+tamanho;
      this.poligonoService.atualizarPoligono(param).subscribe(poligono => this.poligono = poligono);
      alert('Poligono atualizado com sucesso!');
      this.location.back();
  }

}
