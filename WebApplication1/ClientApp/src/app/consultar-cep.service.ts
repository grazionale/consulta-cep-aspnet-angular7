import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ConsultarCepService {

  constructor(private http: HttpClient) { }

  consultar(cep: any): Promise<any> {
    return this.http.get('https://localhost:44376/api/SampleData/searchLogradouro?cep=' + cep)
      .toPromise()
      .then(response => {
        return response;
      });
  }

}
