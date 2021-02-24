import { TestBed } from '@angular/core/testing';

import { PostLinksService } from './post-links.service';

describe('PostLinksService', () => {
  let service: PostLinksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostLinksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
