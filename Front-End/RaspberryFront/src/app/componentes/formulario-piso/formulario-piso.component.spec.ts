import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPisoComponent } from './formulario-piso.component';

describe('FormularioPisoComponent', () => {
  let component: FormularioPisoComponent;
  let fixture: ComponentFixture<FormularioPisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
