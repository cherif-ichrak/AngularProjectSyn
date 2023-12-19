import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatRSComponent } from './certificat-rs.component';

describe('CertificatRSComponent', () => {
  let component: CertificatRSComponent;
  let fixture: ComponentFixture<CertificatRSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificatRSComponent]
    });
    fixture = TestBed.createComponent(CertificatRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
