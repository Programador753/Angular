import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosCountComponent } from './alumnos-count.component';

describe('AlumnosCountComponent', () => {
  let component: AlumnosCountComponent;
  let fixture: ComponentFixture<AlumnosCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
