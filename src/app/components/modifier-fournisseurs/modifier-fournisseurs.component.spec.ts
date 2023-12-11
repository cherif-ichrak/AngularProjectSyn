import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFournisseursComponent } from './modifier-fournisseurs.component';

describe('ModifierFournisseursComponent', () => {
  let component: ModifierFournisseursComponent;
  let fixture: ComponentFixture<ModifierFournisseursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierFournisseursComponent]
    });
    fixture = TestBed.createComponent(ModifierFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
