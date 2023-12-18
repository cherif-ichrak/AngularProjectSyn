import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOPComponent } from './ajouter-op.component';

describe('AjouterOPComponent', () => {
  let component: AjouterOPComponent;
  let fixture: ComponentFixture<AjouterOPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterOPComponent]
    });
    fixture = TestBed.createComponent(AjouterOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
