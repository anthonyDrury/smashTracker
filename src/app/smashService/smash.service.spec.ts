import { TestBed } from '@angular/core/testing';

import { SmashService } from './smash.service';

describe('SmashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmashService = TestBed.get(SmashService);
    expect(service).toBeTruthy();
  });
});
