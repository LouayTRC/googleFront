import { TestBed } from '@angular/core/testing';

import { MonthScoreService } from './month-score.service';

describe('MonthScoreService', () => {
  let service: MonthScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
