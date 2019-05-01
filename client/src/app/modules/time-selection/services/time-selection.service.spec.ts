import { TestBed } from '@angular/core/testing';

import { TimeSelectionService } from './time-selection.service';

describe('TimeSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeSelectionService = TestBed.get(TimeSelectionService);
    expect(service).toBeTruthy();
  });
});
