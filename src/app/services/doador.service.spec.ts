import { TestBed } from '@angular/core/testing';

import { DoadorService } from './doador.service';

describe('DoadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoadorService = TestBed.get(DoadorService);
    expect(service).toBeTruthy();
  });
});
