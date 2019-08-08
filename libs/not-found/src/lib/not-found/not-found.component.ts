// TODO: This is the only one page which doesn't work on SSR, fix it.

import {
  Color,
  HemisphereLight,
  IcosahedronGeometry,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements AfterViewInit {
  @ViewChild('renderIcosahedron', { static: false })
  public renderIcosahedron!: ElementRef<HTMLElement>; // Get reference of div element from HTML element to render Three.js. Need to add non-null assertion in order to inform compiler it's not gonna to be initialized and silent the error.

  public camera: PerspectiveCamera = new PerspectiveCamera(90, 1, 0.01, 20000); // Create the camera.

  // Create renderer to display scene.
  public renderer: WebGLRenderer = new WebGLRenderer({
    alpha: true, // Transparent background.
    antialias: true // Smooth edges.
  });
  public scene: Scene = new Scene(); // Create the scene.

  /**
   * @constructor
   * @description Create a new instance of this component.
   * @param {renderer2} - an abstraction class object to manipulate elements without accessing DOM directly.
   */
  constructor(private renderer2: Renderer2) {}

  /**
   * @description Initialize the component - lifecycle hook.
   * @returns {void}
   */
  public ngAfterViewInit(): void {
    const icosphere = this.createScene(this.renderer); // Return the icosahedron geometry object from after creating scene.

    // Append object to be rendered to the DOM, thus append this using Renderer2.
    this.renderer2.appendChild(
      this.renderIcosahedron.nativeElement, // Specify where on DOM render an element.
      this.renderer.domElement // Manipulate DOM using Renderer2, thus avoid manipulating it directly.
    );
    this.renderScene(icosphere, this.renderer); // Render the scene.
  }

  /**
   * @description Create scene of this animation.
   * @param {renderer} - the renderer object to display scenes using WebGL.
   * @returns {Mesh}
   */
  public createScene(renderer: WebGLRenderer): Mesh {
    this.scene.add(this.camera); // Add camera to the scene.
    renderer.setSize(450, 450); // Set up size of the scene.
    this.camera.position.set(1, -1, 100); // Set up position of the camera.

    // Create material object with properties for surfaces with highlights.
    const material: MeshStandardMaterial = new MeshStandardMaterial({
      color: new Color('#061371'), // Color of the material.
      emissive: new Color('#3f51b5'), // Color of emissive light of the material.
      transparent: true, // Make transparent bacground.
      wireframe: true // Render geometry as wireframe.
    });

    const light: HemisphereLight = new HemisphereLight(0xb3e5fc, 0xb2dfdb, 1); // Create light source positioned above the scene with fading from sky color (first parameters) to ground color (second parameter).
    light.position.set(-100, 500, -300); // Set up position of the light.
    this.scene.add(light); // Add light to the scene.

    const icosphere: Mesh = new Mesh(new IcosahedronGeometry(40, 4), material); // Create the icosahedron geometry.
    this.scene.add(icosphere); // Add  icosahedron geometry to the scene.

    return icosphere;
  }

  /**
   * @description Render icosahedron geometry in the 404 animation.
   * @param  {icosphere} - the icosahedron geometry object.
   * @param  {renderer} - the renderer object to display scenes using WebGL.
   * @returns {void}
   */
  public renderScene(icosphere: Mesh, renderer: WebGLRenderer): void {
    // Create animation.
    requestAnimationFrame(() => {
      this.renderScene(icosphere, renderer);
    });

    renderer.render(this.scene, this.camera); // Render the animation.
    this.updateScene(icosphere); // Rotate the icosahedron geometry.
  }

  /**
   * @description Update rotation of the icosahedron geometry in the 404 animation.
   * @param {icosphere} - the icosahedron geometry object.
   * @returns {void}
   */
  public updateScene(icosphere: Mesh): void {
    icosphere.rotation.x += 0.1;
    icosphere.rotation.y += 0.1;
  }
}
