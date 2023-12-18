import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordereauVersementEspeceComponent } from './bordereau-versement-espece.component';

describe('BordereauVersementEspeceComponent', () => {
  let component: BordereauVersementEspeceComponent;
  let fixture: ComponentFixture<BordereauVersementEspeceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BordereauVersementEspeceComponent]
    });
    fixture = TestBed.createComponent(BordereauVersementEspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
