import { async, TestBed } from '@angular/core/testing';
import { SitemapLazyModule } from './sitemap.lazy.module';

describe('SitemapLazyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SitemapLazyModule]
    }).compileComponents();
  }));

  it('should create sitemap lazy module (workaround lazy loading)', () => {
    expect(SitemapLazyModule).toBeDefined();
  });
});