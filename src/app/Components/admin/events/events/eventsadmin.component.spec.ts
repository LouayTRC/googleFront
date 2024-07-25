import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsadminComponent } from './eventsadmin.component';

describe('EventsComponent', () => {
  let component: EventsadminComponent;
  let fixture: ComponentFixture<EventsadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsadminComponent]
    });
    fixture = TestBed.createComponent(EventsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
