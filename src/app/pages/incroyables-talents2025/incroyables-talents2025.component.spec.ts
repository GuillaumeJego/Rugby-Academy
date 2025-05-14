import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncroyablesTalents2025Component } from './incroyables-talents2025.component';

describe('IncroyablesTalents2025Component', () => {
  let component: IncroyablesTalents2025Component;
  let fixture: ComponentFixture<IncroyablesTalents2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncroyablesTalents2025Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncroyablesTalents2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
