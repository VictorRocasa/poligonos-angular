import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-botao-voltar-grande',
  templateUrl: './botao-voltar-grande.component.html',
  styleUrls: ['./botao-voltar-grande.component.css']
})
export class BotaoVoltarGrandeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
