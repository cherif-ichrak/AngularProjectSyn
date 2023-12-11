import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCaisseComponent } from './afficher-caisse.component';

describe('AfficherCaisseComponent', () => {
  let component: AfficherCaisseComponent;
  let fixture: ComponentFixture<AfficherCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherCaisseComponent]
    });
    fixture = TestBed.createComponent(AfficherCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
