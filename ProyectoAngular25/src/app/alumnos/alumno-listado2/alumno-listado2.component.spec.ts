import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoListado2Component } from './alumno-listado2.component';

describe('AlumnoListado2Component', () => {
  let component: AlumnoListado2Component;
  let fixture: ComponentFixture<AlumnoListado2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoListado2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoListado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
