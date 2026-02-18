import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoFormularioComponent } from './alumno-formulario.component';

describe('AlumnoFormularioComponent', () => {
  let component: AlumnoFormularioComponent;
  let fixture: ComponentFixture<AlumnoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
