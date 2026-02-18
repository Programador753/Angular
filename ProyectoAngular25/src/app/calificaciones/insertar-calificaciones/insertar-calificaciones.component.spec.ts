import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarCalificacionesComponent } from './insertar-calificaciones.component';

describe('InsertarCalificacionesComponent', () => {
  let component: InsertarCalificacionesComponent;
  let fixture: ComponentFixture<InsertarCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarCalificacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
