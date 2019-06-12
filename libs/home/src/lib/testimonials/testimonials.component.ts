import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  public customOptions: OwlOptions = {
    animateIn: true,
    autoHeight: false,
    autoWidth: false,
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    nav: false
  };

  // TODO: Optimize the images to be more efficient/modern format of images.
  public slidesItems: {
    alt: string;
    id: string;
    title: string;
    src: string;
  }[] = [
    {
      alt: 'Cyber Security',
      id: '1',
      src: 'assets/cyber-security.jpg',
      title: 'Cyber Security'
    },
    {
      alt: 'Digital Strategy',
      id: '2',
      src: 'assets/digital-strategy.jpg',
      title: 'Digital Strategy'
    },
    {
      alt: 'Software Development',
      id: '3',
      src: 'assets/software-development.jpg',
      title: 'Software Development'
    },
    {
      alt: 'Cyber Security',
      id: '4',
      src: 'assets/cyber-security.jpg',
      title: 'Cyber Security'
    },
    {
      alt: 'Digital Strategy',
      id: '5',
      src: 'assets/digital-strategy.jpg',
      title: 'Digital Strategy'
    },
    {
      alt: 'Software Development',
      id: '6',
      src: 'assets/software-development.jpg',
      title: 'Software Development'
    }
  ];
}
