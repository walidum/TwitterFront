/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListTweetsComponent } from './list-tweets.component';

describe('ListTweetsComponent', () => {
  let component: ListTweetsComponent;
  let fixture: ComponentFixture<ListTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
