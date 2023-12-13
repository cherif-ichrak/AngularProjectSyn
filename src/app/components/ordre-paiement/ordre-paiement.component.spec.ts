import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdrePaiementComponent } from './ordre-paiement.component';

describe('OrdrePaiementComponent', () => {
  let component: OrdrePaiementComponent;
  let fixture: ComponentFixture<OrdrePaiementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdrePaiementComponent]
    });
    fixture = TestBed.createComponent(OrdrePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
