import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerCertificatComponent } from './imprimer-certificat.component';

describe('ImprimerCertificatComponent', () => {
  let component: ImprimerCertificatComponent;
  let fixture: ComponentFixture<ImprimerCertificatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImprimerCertificatComponent]
    });
    fixture = TestBed.createComponent(ImprimerCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
