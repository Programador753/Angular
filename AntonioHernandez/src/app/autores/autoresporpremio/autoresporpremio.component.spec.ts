import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresporpremioComponent } from './autoresporpremio.component';

describe('AutoresporpremioComponent', () => {
  let component: AutoresporpremioComponent;
  let fixture: ComponentFixture<AutoresporpremioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoresporpremioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoresporpremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
