/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakergroupComponent } from './makergroup.component';

describe('MakergroupComponent', () => {
  let component: MakergroupComponent;
  let fixture: ComponentFixture<MakergroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakergroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
