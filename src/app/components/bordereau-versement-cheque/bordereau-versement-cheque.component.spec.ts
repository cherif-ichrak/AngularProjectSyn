import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordereauVersementChequeComponent } from './bordereau-versement-cheque.component';

describe('BordereauVersementChequeComponent', () => {
  let component: BordereauVersementChequeComponent;
  let fixture: ComponentFixture<BordereauVersementChequeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BordereauVersementChequeComponent]
    });
    fixture = TestBed.createComponent(BordereauVersementChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
