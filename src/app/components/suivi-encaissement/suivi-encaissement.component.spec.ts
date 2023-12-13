import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviEncaissementComponent } from './suivi-encaissement.component';

describe('SuiviEncaissementComponent', () => {
  let component: SuiviEncaissementComponent;
  let fixture: ComponentFixture<SuiviEncaissementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviEncaissementComponent]
    });
    fixture = TestBed.createComponent(SuiviEncaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
