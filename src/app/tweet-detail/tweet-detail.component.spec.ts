/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TweetDetailComponent } from './tweet-detail.component';

describe('TweetDetailComponent', () => {
  let component: TweetDetailComponent;
  let fixture: ComponentFixture<TweetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
