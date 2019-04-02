import { async, TestBed } from '@angular/core/testing';
import { SitemapModule } from './sitemap.module';

describe('SitemapModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SitemapModule]
    }).compileComponents();
  }));

  it('should create sitemap module', () => {
    expect(SitemapModule).toBeDefined();
  });
});
