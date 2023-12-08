import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteDepenseComponent } from './activite-depense.component';

describe('ActiviteDepenseComponent', () => {
  let component: ActiviteDepenseComponent;
  let fixture: ComponentFixture<ActiviteDepenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteDepenseComponent]
    });
    fixture = TestBed.createComponent(ActiviteDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
