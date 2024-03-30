import { TestBed } from '@angular/core/testing';

import { FirebaseGameService } from './firebase-game.service';

describe('FirebaseGameService', () => {
  let service: FirebaseGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
