import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  public customOptions: OwlOptions = {
    animateIn: 'fadeInRight',
    animateOut: 'fadeOutLeft',
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
    id: string;
    name: string;
    position: string;
    src: string;
  }[] = [
    {
      id: '1',
      name: 'John Boe',
      position: 'CEO of XYZ',
      src: 'assets/man.png'
    },
    {
      id: '2',
      name: 'Kate Jackson',
      position: 'Manager of ABC',
      src: 'assets/woman.png'
    },
    {
      id: '3',
      name: 'John Boe',
      position: 'CEO of XYZ',
      src: 'assets/man.png'
    },
    {
      id: '4',
      name: 'Kate Jackson',
      position: 'Manager of ABC',
      src: 'assets/woman.png'
    },
    {
      id: '5',
      name: 'John Doe',
      position: 'CEO of XYZ',
      src: 'assets/man.png'
    }
  ];
}
