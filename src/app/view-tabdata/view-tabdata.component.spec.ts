import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTabdataComponent } from './view-tabdata.component';

describe('ViewTabdataComponent', () => {
  let component: ViewTabdataComponent;
  let fixture: ComponentFixture<ViewTabdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTabdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTabdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
