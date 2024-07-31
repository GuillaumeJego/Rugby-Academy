import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLogoComponent } from './core-logo.component';

describe('CoreLogoComponent', () => {
  let component: CoreLogoComponent;
  let fixture: ComponentFixture<CoreLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
