import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IchrakComponent } from './ichrak.component';

describe('IchrakComponent', () => {
  let component: IchrakComponent;
  let fixture: ComponentFixture<IchrakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IchrakComponent]
    });
    fixture = TestBed.createComponent(IchrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
