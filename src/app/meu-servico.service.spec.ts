import { TestBed, inject } from '@angular/core/testing';

import { MeuServicoService } from './meu-servico.service';

describe('MeuServicoService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeuServicoService]
    });
    const service = TestBed.get(MeuServicoService);
  });

  it('should be created', inject([MeuServicoService], (service: MeuServicoService) => {
    expect(service).toBeTruthy();
  }));

  it('testando getValor', inject([MeuServicoService], (service: MeuServicoService) => {
    expect(service.getNome('rafael')).toBe('rafael');
  }));

  it('testando linguas', () => {
    let service;

    beforeEach(() => TestBed.configureTestingModule({
      providers: [MeuServicoService]
    }));

    beforeEach(inject([MeuServicoService], s => {
      service = s;
    }));

    it('should return available languages', () => {
      const languages = service.getLinguas();
      expect(languages).toContain('pt');
      expect(languages).toContain('br');
      expect(languages).toContain('en');
      expect(languages.length).toEqual(3);
  });

  });

});
