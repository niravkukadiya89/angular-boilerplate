import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundcmpComponent } from './notfoundcmp.component';

describe('NotfoundcmpComponent', () => {
  let component: NotfoundcmpComponent;
  let fixture: ComponentFixture<NotfoundcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
