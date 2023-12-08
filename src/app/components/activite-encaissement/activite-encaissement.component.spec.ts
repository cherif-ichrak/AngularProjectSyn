import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteEncaissementComponent } from './activite-encaissement.component';

describe('ActiviteEncaissementComponent', () => {
  let component: ActiviteEncaissementComponent;
  let fixture: ComponentFixture<ActiviteEncaissementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteEncaissementComponent]
    });
    fixture = TestBed.createComponent(ActiviteEncaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
