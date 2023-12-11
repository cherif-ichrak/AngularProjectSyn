import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertesFournisseursComponent } from './alertes-fournisseurs.component';

describe('AlertesFournisseursComponent', () => {
  let component: AlertesFournisseursComponent;
  let fixture: ComponentFixture<AlertesFournisseursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertesFournisseursComponent]
    });
    fixture = TestBed.createComponent(AlertesFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
