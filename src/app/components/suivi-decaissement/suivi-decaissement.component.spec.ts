import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDecaissementComponent } from './suivi-decaissement.component';

describe('SuiviDecaissementComponent', () => {
  let component: SuiviDecaissementComponent;
  let fixture: ComponentFixture<SuiviDecaissementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviDecaissementComponent]
    });
    fixture = TestBed.createComponent(SuiviDecaissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
