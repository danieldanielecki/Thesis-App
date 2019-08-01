import { Component, OnInit } from '@angular/core';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions
} from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // Non-null assertion operators are required in order to prevent compiler from throwing an error.
  public galleryOptions!: NgxGalleryOptions[];
  public galleryImages!: NgxGalleryImage[];

  public ngOnInit(): void {
    this.galleryOptions = [
      {
        height: '800px',
        image: true,
        imageAnimation: NgxGalleryAnimation.Rotate,
        imageArrows: false,
        imageAutoPlay: true,
        imageAutoPlayInterval: 4000,
        imageAutoPlayPauseOnHover: true,
        imageDescription: true,
        imageInfinityMove: true,
        imageSwipe: true,
        preview: false,
        thumbnailsArrows: false,
        thumbnailsColumns: 3,
        thumbnailMargin: 0,
        thumbnailsMargin: 0,
        thumbnailsRows: 1,
        thumbnailsSwipe: true
      },
      {
        breakpoint: 991,
        height: '500px',
        thumbnails: false
      },
      {
        breakpoint: 767,
        height: '400px'
      }
    ];

    // TODO: Change href on routerLink, issue #87.
    // TODO: Optimize the images to be more efficient/modern format of images.
    this.galleryImages = [
      {
        big: './assets/cyber-security.jpg',
        description:
          'Some kind of description goes here... Some kind of description goes here...<br><br><a href="/cyber-security">Cyber Security</a>',
        medium: './assets/cyber-security.jpg',
        small: './assets/cyber-security.jpg'
      },
      {
        big: 'assets/digital-strategy.jpg',
        description:
          'Some kind of description goes here... Some kind of description goes here...<br><br><a href="/digital-strategy">Digital Strategy</a>',
        medium: 'assets/digital-strategy.jpg',
        small: 'assets/digital-strategy.jpg'
      },
      {
        big: 'assets/software-development.jpg',
        description:
          'Some kind of description goes here... Some kind of description goes here...<br><br><a href="/software-development">Software Development</a>',
        medium: 'assets/software-development.jpg',
        small: 'assets/software-development.jpg'
      }
    ];
  }
}
