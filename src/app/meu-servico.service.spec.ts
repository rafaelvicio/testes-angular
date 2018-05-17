import { TestBed, inject } from '@angular/core/testing';

import { MeuServicoService } from './meu-servico.service';

describe('MeuServicoService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeuServicoService]
    });
  });

  it('should be created', inject([MeuServicoService], (service: MeuServicoService) => {
    expect(service).toBeTruthy();
  }));

  it('testando getValor', inject([MeuServicoService], (service: MeuServicoService) => {
    expect(service.getNome('rafael')).toBe('rafael');
  }));

});
