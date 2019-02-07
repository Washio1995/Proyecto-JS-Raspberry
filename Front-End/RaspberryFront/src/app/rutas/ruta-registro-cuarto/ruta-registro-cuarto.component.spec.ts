import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaRegistroCuartoComponent } from './ruta-registro-cuarto.component';

describe('RutaRegistroCuartoComponent', () => {
  let component: RutaRegistroCuartoComponent;
  let fixture: ComponentFixture<RutaRegistroCuartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaRegistroCuartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaRegistroCuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
