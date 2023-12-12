import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepenseServicesComponent } from './depense-services.component';

describe('DepenseServicesComponent', () => {
  let component: DepenseServicesComponent;
  let fixture: ComponentFixture<DepenseServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepenseServicesComponent]
    });
    fixture = TestBed.createComponent(DepenseServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
