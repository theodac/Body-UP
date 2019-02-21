import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecipePage } from './list-recipe.page';

describe('ListRecipePage', () => {
  let component: ListRecipePage;
  let fixture: ComponentFixture<ListRecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecipePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
