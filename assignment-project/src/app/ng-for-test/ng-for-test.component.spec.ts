import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTestComponent } from './ng-for-test.component';

describe('NgForTestComponent', () => {
  let component: NgForTestComponent;
  let fixture: ComponentFixture<NgForTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
