import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerOrdrePaiementComponent } from './imprimer-ordre-paiement.component';

describe('ImprimerOrdrePaiementComponent', () => {
  let component: ImprimerOrdrePaiementComponent;
  let fixture: ComponentFixture<ImprimerOrdrePaiementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerOrdrePaiementComponent]
    });
    fixture = TestBed.createComponent(ImprimerOrdrePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
