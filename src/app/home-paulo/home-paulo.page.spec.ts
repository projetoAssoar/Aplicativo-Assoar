import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePauloPage } from './home-paulo.page';

describe('HomePauloPage', () => {
  let component: HomePauloPage;
  let fixture: ComponentFixture<HomePauloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePauloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePauloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
