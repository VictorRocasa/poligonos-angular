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

  sucesso:boolean = false;

  constructor(private poligonoService: PoligonoService, private router: Router) { }

  ngOnInit(): void {
    
  }

  add(l: string, t: string){
    t = t.replace(',','.');
    alert(t);
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
      let lados = Number(l);
      alert(tamanho);
      this.poligonoService.adicionarPoligono({lados,tamanho} as Poligono).subscribe();
      alert('Poligono adicionado com sucesso!');
      this.sucesso = true;
  }

  limpa(valor: string): string{
    if(this.sucesso){
      this.sucesso = false;
      return '';
    }
    return valor;
  }

}
