import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonComponent } from './singleton.component';

describe('SingletonComponent', () => {
  let component: SingletonComponent;
  let fixture: ComponentFixture<SingletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
