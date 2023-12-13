import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviVirementComponent } from './suivi-virement.component';

describe('SuiviVirementComponent', () => {
  let component: SuiviVirementComponent;
  let fixture: ComponentFixture<SuiviVirementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviVirementComponent]
    });
    fixture = TestBed.createComponent(SuiviVirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
