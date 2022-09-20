import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';


import { FormaService } from '../forma.service';
import { FormaFormatador } from '../FormaFormatador';
import { Poligono } from '../poligono';

import {Router} from '@angular/router'; 

@Component({
  selector: 'app-formas',
  templateUrl: './formas.component.html',
  styleUrls: ['./formas.component.css']
})
export class FormasComponent implements OnInit {
@ViewChild('elseBlock', {static: true}) elseBlock: TemplateRef<any>|null = null;
@ViewChild('elseBlock2', {static: true}) elseBlock2: TemplateRef<any>|null = null;

  constructor(private formaService: FormaService, private router:Router) { }

  formas: FormaFormatador[] = [];

  ngOnInit(): void {
    this.getFormas();
  }
  
  getFormas() {
    this.formaService.getFormas().subscribe(formas => this.formas = formas)   
  }

  getResumoPoligono(poligono: Poligono): string{
    return poligono.lados+' lados de tamanho '+poligono.tamanho;
  }

    detalhes(id:number) : void{
        this.router.navigate(['formas/detalhes'], { queryParams: {id: id}});
    }

  apagar(forma: FormaFormatador): void{
    if(confirm('Deseja apagar permanentemente a forma de Id = '+forma.id+'?')){
      this.formaService.deletarForma(forma.id).subscribe(res => {
        console.log(res); // SE DER 200 OK
        this.formas = this.formas.filter(h => h != forma);
      }, error => {
        console.error(error); // SE DER QUALQUER ERRO
        alert('Não é possível apagar a forma pois ele compoe outra forma!');
      });
    }
  }
}
