import 'hammerjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent],
      imports: [NgxGalleryModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create gallery component', () => {
    expect(component).toBeTruthy();
  });

  it('should have ngx-gallery component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ngx-gallery')).not.toBeNull();
  });
});
