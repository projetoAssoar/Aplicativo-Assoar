import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientPage } from './pacient.page';

describe('PacientPage', () => {
  let component: PacientPage;
  let fixture: ComponentFixture<PacientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
