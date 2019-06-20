import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePacientePage } from './home-paciente.page';

describe('HomePacientePage', () => {
  let component: HomePacientePage;
  let fixture: ComponentFixture<HomePacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
