import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Mesh, WebGLRenderer } from 'three'; // TODO: Check why it takes from src, instead of build. It can be reason why unit test fails.
import { NotFoundComponent } from './not-found.component';

jest.mock('three'); // Mock Three.js module.

describe('NotFoundComponent', () => {
  const renderer: WebGLRenderer = new WebGLRenderer();
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

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

    renderer.render = jest.fn();

    spyOn(component, 'renderScene').and.callThrough();
    component.renderScene(icosphere, renderer);
    expect(component.renderScene).toHaveBeenCalled();
  });

  it('should call updateScene method', () => {
    const icosphere: Mesh = new Mesh();

    icosphere.rotation = jest.fn();

    spyOn(component, 'updateScene').and.callThrough();
    component.updateScene(icosphere);
    expect(component.updateScene).toHaveBeenCalled();
  });
});
