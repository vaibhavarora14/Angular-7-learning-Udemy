import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponentComponent } from './recipe-component.component';

describe('RecipeComponentComponent', () => {
  let component: RecipeComponentComponent;
  let fixture: ComponentFixture<RecipeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
