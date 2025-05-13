import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubParty2025Component } from './club-party-2025.component';

describe('ClubParty2025Component', () => {
  let component: ClubParty2025Component;
  let fixture: ComponentFixture<ClubParty2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubParty2025Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubParty2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
