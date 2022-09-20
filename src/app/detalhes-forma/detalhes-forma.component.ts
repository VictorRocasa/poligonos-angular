import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormaService } from '../forma.service';
import { FormaFormatador } from '../formaFormatador';

@Component({
  selector: 'app-detalhes-forma',
  templateUrl: './detalhes-forma.component.html',
  styleUrls: ['./detalhes-forma.component.css']
})
export class DetalhesFormaComponent implements OnInit {
forma!: FormaFormatador;

  constructor(private route: ActivatedRoute, private formaService: FormaService) { }

  ngOnInit(): void {
    this.getForma();
  }  

  getForma(): void {
    this.formaService.getForma(parseInt(this.route.snapshot.queryParamMap.get('id')!,10)).subscribe(forma => this.forma = forma);
  }
  
}
