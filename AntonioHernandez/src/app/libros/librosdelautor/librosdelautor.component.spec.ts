import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosdelautorComponent } from './librosdelautor.component';

describe('LibrosdelautorComponent', () => {
  let component: LibrosdelautorComponent;
  let fixture: ComponentFixture<LibrosdelautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosdelautorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosdelautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
