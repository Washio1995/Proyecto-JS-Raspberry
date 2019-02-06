import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAccionesComponent } from './ruta-acciones.component';

describe('RutaAccionesComponent', () => {
  let component: RutaAccionesComponent;
  let fixture: ComponentFixture<RutaAccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
