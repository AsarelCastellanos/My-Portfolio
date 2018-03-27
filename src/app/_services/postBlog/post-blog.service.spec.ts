import { TestBed, inject } from '@angular/core/testing';

import { PostBlogService } from './post-blog.service';

describe('PostBlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostBlogService]
    });
  });

  it('should be created', inject([PostBlogService], (service: PostBlogService) => {
    expect(service).toBeTruthy();
  }));
});
