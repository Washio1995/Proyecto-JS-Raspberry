import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVentanaComponent } from './formulario-ventana.component';

describe('FormularioVentanaComponent', () => {
  let component: FormularioVentanaComponent;
  let fixture: ComponentFixture<FormularioVentanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioVentanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
