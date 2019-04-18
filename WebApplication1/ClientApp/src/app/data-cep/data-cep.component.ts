import { Component, OnInit } from '@angular/core';
import { ConsultarCepService } from '../consultar-cep.service';

@Component({
  selector: 'app-data-cep',
  templateUrl: './data-cep.component.html',
  styleUrls: ['./data-cep.component.css']
})
export class DataCepComponent implements OnInit {
  cep = '';
  dados = [];

  constructor(private consultarCepService: ConsultarCepService) { }

  ngOnInit() {
    
  }

  consultar() {
    this.consultarCepService.consultar(this.cep)
      .then(resposta => {
        console.log(resposta);
        this.dados.push(resposta);
        console.log(this.dados);
      });
  }

}
