import { TestBed } from '@angular/core/testing';

import { MusicListService } from './music-list.service';

describe('MusicListService', () => {
  let service: MusicListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
