import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteCaisseComponent } from './activite-caisse.component';

describe('ActiviteCaisseComponent', () => {
  let component: ActiviteCaisseComponent;
  let fixture: ComponentFixture<ActiviteCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiviteCaisseComponent]
    });
    fixture = TestBed.createComponent(ActiviteCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
