import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviVersementComponent } from './suivi-versement.component';

describe('SuiviVersementComponent', () => {
  let component: SuiviVersementComponent;
  let fixture: ComponentFixture<SuiviVersementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviVersementComponent]
    });
    fixture = TestBed.createComponent(SuiviVersementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
