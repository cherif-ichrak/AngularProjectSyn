import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteVersementComponent } from './activite-versement.component';

describe('ActiviteVersementComponent', () => {
  let component: ActiviteVersementComponent;
  let fixture: ComponentFixture<ActiviteVersementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteVersementComponent]
    });
    fixture = TestBed.createComponent(ActiviteVersementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
