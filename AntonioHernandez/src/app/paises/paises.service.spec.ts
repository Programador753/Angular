import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { PaisesService } from './paises.service';

describe('PaisesService', () => {
  let service: PaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(PaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
