import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteEchangeComponent } from './activite-echange.component';

describe('ActiviteEchangeComponent', () => {
  let component: ActiviteEchangeComponent;
  let fixture: ComponentFixture<ActiviteEchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteEchangeComponent]
    });
    fixture = TestBed.createComponent(ActiviteEchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
