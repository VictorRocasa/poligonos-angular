import { Component, OnInit } from '@angular/core';

import { FormaFormatador } from '../formaFormatador';

import { FormaService } from '../forma.service';

@Component({
  selector: 'app-formas',
  templateUrl: './formas.component.html',
  styleUrls: ['./formas.component.css']
})
export class FormasComponent implements OnInit {

  constructor(private formaService: FormaService) { }

  formas: FormaFormatador[] = [];

  ngOnInit(): void {
    this.getFormas();
  }
  
  getFormas() {
    this.formaService.getFormas().subscribe(formas => this.formas = formas)    
  }

  imprimeArrayNumerica(arr: number[]): string{
    let retorno: string = '';
    if(arr.length > 0)
      retorno+=arr[0];
    for(let i = 1; i < arr.length; i++){
      retorno+=', '+arr[i];
    }
    //return retorno;
    return 'placeholder';
  }

}
