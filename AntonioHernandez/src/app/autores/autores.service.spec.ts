import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { AutoresService } from './autores.service';

describe('AutoresService', () => {
  let service: AutoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(AutoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
