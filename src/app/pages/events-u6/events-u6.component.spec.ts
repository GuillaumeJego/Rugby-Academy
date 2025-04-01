import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsU6Component } from './events-u6.component';

describe('EventsU6Component', () => {
  let component: EventsU6Component;
  let fixture: ComponentFixture<EventsU6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsU6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsU6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
