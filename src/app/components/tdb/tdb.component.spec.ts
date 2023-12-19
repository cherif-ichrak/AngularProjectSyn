import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdbComponent } from './tdb.component';

describe('TdbComponent', () => {
  let component: TdbComponent;
  let fixture: ComponentFixture<TdbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdbComponent]
    });
    fixture = TestBed.createComponent(TdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
