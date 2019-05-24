import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadorPage } from './doador.page';

describe('DoadorPage', () => {
  let component: DoadorPage;
  let fixture: ComponentFixture<DoadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
