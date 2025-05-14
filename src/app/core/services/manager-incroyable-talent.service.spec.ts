import { TestBed } from '@angular/core/testing';

import { ManagerIncroyableTalentService } from './manager-incroyable-talent.service';

describe('ManagerIncroyableTalentService', () => {
  let service: ManagerIncroyableTalentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerIncroyableTalentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
