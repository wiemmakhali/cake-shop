import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsAjoutComponent } from './produits-ajout.component';

describe('ProduitsAjoutComponent', () => {
  let component: ProduitsAjoutComponent;
  let fixture: ComponentFixture<ProduitsAjoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitsAjoutComponent]
    });
    fixture = TestBed.createComponent(ProduitsAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
