import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Mesh, WebGLRenderer, PerspectiveCamera, HemisphereLight } from 'three';
import { NotFoundComponent } from './not-found.component';

// TODO: Make passing the last statement.

// Mock Three.js objects, required to be manually (unfortunately).
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
      return;
    }
    public set() {
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
    public render(): void {
      return;
    }
    public setSize(): void {
      return;
    }
  }
}));

// TODO: Improve code coverage.
describe('NotFoundComponent', () => {
  const camera: PerspectiveCamera = new PerspectiveCamera();
  const light: HemisphereLight = new HemisphereLight();
  const renderer: WebGLRenderer = new WebGLRenderer();
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  // Mock 2 methods.
  camera.position.set = jest.fn();
  light.position.set = jest.fn();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
  });

  it('should call renderScene method', () => {
    const icosphere: Mesh = new Mesh();

    spyOn(component, 'renderScene').and.callThrough();
    component.renderScene(icosphere, renderer);
    expect(component.renderScene).toHaveBeenCalled();
  });

  it('should call updateScene method', () => {
    const icosphere: Mesh = new Mesh();

    spyOn(component, 'updateScene').and.callThrough();
    component.updateScene(icosphere);
    expect(component.updateScene).toHaveBeenCalled();
  });
});
