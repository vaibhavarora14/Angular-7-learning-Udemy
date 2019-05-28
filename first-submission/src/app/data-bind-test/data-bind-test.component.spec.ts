import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindTestComponent } from './data-bind-test.component';

describe('DataBindTestComponent', () => {
  let component: DataBindTestComponent;
  let fixture: ComponentFixture<DataBindTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
