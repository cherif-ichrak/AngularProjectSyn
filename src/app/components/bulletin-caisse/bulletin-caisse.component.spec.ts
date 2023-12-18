import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinCaisseComponent } from './bulletin-caisse.component';

describe('BulletinCaisseComponent', () => {
  let component: BulletinCaisseComponent;
  let fixture: ComponentFixture<BulletinCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletinCaisseComponent]
    });
    fixture = TestBed.createComponent(BulletinCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
