import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouchesNomComponent } from './souches-nom.component';

describe('SouchesNomComponent', () => {
  let component: SouchesNomComponent;
  let fixture: ComponentFixture<SouchesNomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouchesNomComponent]
    });
    fixture = TestBed.createComponent(SouchesNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
