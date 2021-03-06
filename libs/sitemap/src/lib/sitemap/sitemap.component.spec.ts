import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@libs/shared/src/index';
import { SitemapComponent } from './sitemap.component';

describe('SitemapComponent', () => {
  let component: SitemapComponent;
  let fixture: ComponentFixture<SitemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SitemapComponent],
      imports: [RouterTestingModule, SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create sitemap component', () => {
    expect(component).toBeTruthy();
  });
});
