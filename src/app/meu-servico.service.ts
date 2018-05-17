import { Injectable } from '@angular/core';

@Injectable()
export class MeuServicoService {

  constructor() { }

  getNome(nome: String) {
    return nome;
  }

}
