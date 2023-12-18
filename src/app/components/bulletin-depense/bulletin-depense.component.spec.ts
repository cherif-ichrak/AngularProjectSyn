import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinDepenseComponent } from './bulletin-depense.component';

describe('BulletinDepenseComponent', () => {
  let component: BulletinDepenseComponent;
  let fixture: ComponentFixture<BulletinDepenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletinDepenseComponent]
    });
    fixture = TestBed.createComponent(BulletinDepenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
