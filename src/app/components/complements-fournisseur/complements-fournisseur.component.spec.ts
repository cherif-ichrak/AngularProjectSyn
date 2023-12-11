import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementsFournisseurComponent } from './complements-fournisseur.component';

describe('ComplementsFournisseurComponent', () => {
  let component: ComplementsFournisseurComponent;
  let fixture: ComponentFixture<ComplementsFournisseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplementsFournisseurComponent]
    });
    fixture = TestBed.createComponent(ComplementsFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
