import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Mesh, WebGLRenderer, PerspectiveCamera, HemisphereLight } from 'three'; // TODO: Check why it takes from src, instead of build. It can be reason why unit test fails.
import { NotFoundComponent } from './not-found.component';
import { Renderer2, Type } from '@angular/core';

// TODO: Make passing the last statement and clean it.

jest.mock('three'); // Mock Three.js module.
jest.mock('three', () => ({
  Color: class Color {
    public constructor() {
      return;
    }
  },
  HemisphereLight: class HemisphereLight {
    public constructor() {
      return;
    }
    public position() {
      return {
        set: jest.fn()
      };
    }
  },
  IcosahedronGeometry: class IcosahedronGeometry {
    public constructor() {
      return;
    }
  },
  Mesh: class Mesh {
    public constructor() {
      return;
    }
    public rotation() {
      return;
    }
  },
  MeshStandardMaterial: class MeshStandardMaterial {
    public constructor() {
      return;
    }
  },
  PerspectiveCamera: class PerspectiveCamera {
    public constructor() {
      return;
    }
    public position() {
      return {
        set: jest.fn()
      };
    }
    public set() {
      return;
    }
  },
  Renderer2: class Renderer2 {
    public appendChild() {
      return;
    }
  },
  Scene: class Scene {
    public add() {
      return;
    }
    public constructor() {
      return;
    }
  },
  WebGLRenderer: class WebGLRenderer {
    public setSize(): void {
      return;
    }
  }
}));
// TODO: Fix this test and bring it back by removing "-" from name of the file.
describe('NotFoundComponent', () => {
  const camera: PerspectiveCamera = new PerspectiveCamera();
  const icosahedron = document.getElementById('renderIcosahedron');
  const light: HemisphereLight = new HemisphereLight();
  const renderer: WebGLRenderer = new WebGLRenderer();
  light.position.set = jest.fn();
  camera.position.set = jest.fn();
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let renderer2: Renderer2;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
      providers: [Renderer2]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<
      Renderer2
    >); // Grab renderer.
    spyOn(renderer2, 'appendChild').and.callThrough();
  });

  it('should create not found component', () => {
    expect(component).toBeTruthy();
  });

  it('should mock renderer.setSize external method, call createScene method and return Mesh', () => {
    spyOn(component, 'createScene')
      .and.callThrough()
      .and.returnValue(Mesh);
    component.createScene(renderer);
    expect(component.createScene).toHaveBeenCalled();

    renderer.setSize = jest.fn();
  });

  it('should call renderScene method', () => {
    const icosphere: Mesh = new Mesh();

    renderer.render = jest.fn();

    spyOn(component, 'renderScene').and.callThrough();
    component.renderScene(icosphere, renderer);
    expect(component.renderScene).toHaveBeenCalled();
  });

  it('should call updateScene method', () => {
    const icosphere: Mesh = new Mesh();
    camera.position.set = jest.fn();

    icosphere.rotation = jest.fn();

    spyOn(component, 'updateScene').and.callThrough();
    component.updateScene(icosphere);
    expect(component.updateScene).toHaveBeenCalled();
  });

  it('should call renderer', () => {
    expect(renderer2.appendChild).toHaveBeenCalledWith(expect.anything());
  });
});
