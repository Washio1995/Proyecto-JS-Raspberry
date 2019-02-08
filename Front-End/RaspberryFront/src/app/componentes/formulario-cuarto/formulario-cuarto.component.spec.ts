import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCuartoComponent } from './formulario-cuarto.component';

describe('FormularioCuartoComponent', () => {
  let component: FormularioCuartoComponent;
  let fixture: ComponentFixture<FormularioCuartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCuartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
