import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnalumnoComponent } from './unalumno.component';

describe('UnalumnoComponent', () => {
  let component: UnalumnoComponent;
  let fixture: ComponentFixture<UnalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnalumnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
