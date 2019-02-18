import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrainementPage } from './entrainement.page';

describe('EntrainementPage', () => {
  let component: EntrainementPage;
  let fixture: ComponentFixture<EntrainementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrainementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrainementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
