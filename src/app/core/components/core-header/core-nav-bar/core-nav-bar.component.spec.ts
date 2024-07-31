import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreNavBarComponent } from './core-nav-bar.component';

describe('CoreNavBarComponent', () => {
  let component: CoreNavBarComponent;
  let fixture: ComponentFixture<CoreNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
