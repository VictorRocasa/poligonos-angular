import { TestBed } from '@angular/core/testing';

import { PoligonoService } from './poligono.service';

describe('PoligonoService', () => {
  let service: PoligonoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoligonoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
