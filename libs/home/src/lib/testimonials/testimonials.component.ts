import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  public customOptions: OwlOptions = {
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutLeft',
    autoHeight: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoWidth: false,
    center: true,
    dots: true,
    dotsSpeed: 1000,
    items: 1,
    loop: true,
    mouseDrag: true,
    nav: false,
    pullDrag: true,
    smartSpeed: 500,
    touchDrag: true
  };

  public slidesItems: {
    alt: string;
    id: string;
    name: string;
    position: string;
    title: string;
    src: string;
  }[] = [
    {
      alt: 'Cyber Security',
      id: '1',
      name: 'John Boe',
      position: 'CEO of XYZ',
      src: 'assets/man.png',
      title: 'Cyber Security'
    },
    {
      alt: 'Digital Strategy',
      id: '2',
      name: 'Kate Jackson',
      position: 'Manager of ABC',
      src: 'assets/woman.png',
      title: 'Digital Strategy'
    },
    {
      alt: 'Software Development',
      id: '3',
      name: 'John Boe',
      position: 'CEO of XYZ',
      src: 'assets/man.png',
      title: 'Software Development'
    },
    {
      alt: 'Cyber Security',
      id: '4',
      name: 'Kate Jackson',
      position: 'Manager of ABC',
      src: 'assets/woman.png',
      title: 'Cyber Security'
    },
    {
      alt: 'Digital Strategy',
      id: '5',
      name: 'John Doe',
      position: 'CEO of XYZ',
      src: 'assets/man.png',
      title: 'Digital Strategy'
    }
  ];
}
