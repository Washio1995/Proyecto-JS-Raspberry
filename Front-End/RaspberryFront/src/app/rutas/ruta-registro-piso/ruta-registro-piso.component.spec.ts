import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaRegistroPisoComponent } from './ruta-registro-piso.component';

describe('RutaRegistroPisoComponent', () => {
  let component: RutaRegistroPisoComponent;
  let fixture: ComponentFixture<RutaRegistroPisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaRegistroPisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaRegistroPisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
