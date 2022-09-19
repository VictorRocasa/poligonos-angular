import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';


import { FormaService } from '../forma.service';
import { FormaFormatador } from '../FormaFormatador';
import { Poligono } from '../poligono';

@Component({
  selector: 'app-formas',
  templateUrl: './formas.component.html',
  styleUrls: ['./formas.component.css']
})
export class FormasComponent implements OnInit {
@ViewChild('elseBlock', {static: true}) elseBlock: TemplateRef<any>|null = null;
@ViewChild('elseBlock2', {static: true}) elseBlock2: TemplateRef<any>|null = null;

  constructor(private formaService: FormaService) { }

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

  getResumoForma(agrupamento: number): string{
    let conta: number = 0;
    let resultado: string = "";
    for(let forma of this.formas)
      if(forma.id === agrupamento){
        if(forma.poligonos.length === 0)
          resultado+="0 poligonos ";
        else if(forma.poligonos.length === 1)
          resultado+="1 poligono ";
        else if(forma.poligonos.length > 1)
          resultado+=forma.poligonos.length+" poligonos ";
        resultado+="e ";
        if(forma.formas.length === 0)
          resultado+="0 formas";
        else if(forma.formas.length === 1)
          resultado+="1 forma";
        else if(forma.formas.length > 1)
          resultado+=forma.formas.length+" formas ";
          break;
      } 
      return resultado;
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
