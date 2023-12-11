import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratDomTraitmentComponent } from './contrat-dom-traitment.component';

describe('ContratDomTraitmentComponent', () => {
  let component: ContratDomTraitmentComponent;
  let fixture: ComponentFixture<ContratDomTraitmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContratDomTraitmentComponent]
    });
    fixture = TestBed.createComponent(ContratDomTraitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
