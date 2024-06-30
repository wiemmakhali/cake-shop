import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAjoutComponent } from './categories-ajout.component';

describe('CategoriesAjoutComponent', () => {
  let component: CategoriesAjoutComponent;
  let fixture: ComponentFixture<CategoriesAjoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesAjoutComponent]
    });
    fixture = TestBed.createComponent(CategoriesAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
