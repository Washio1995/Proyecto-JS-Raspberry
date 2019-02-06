import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaRecuperarContrasenaComponent } from './ruta-recuperar-contrasena.component';

describe('RutaRecuperarContrasenaComponent', () => {
  let component: RutaRecuperarContrasenaComponent;
  let fixture: ComponentFixture<RutaRecuperarContrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaRecuperarContrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaRecuperarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
