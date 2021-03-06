import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarsComponent } from './calendars.component';

describe('CalendarComponent', () => {
  let component: CalendarsComponent;
  let fixture: ComponentFixture<CalendarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
