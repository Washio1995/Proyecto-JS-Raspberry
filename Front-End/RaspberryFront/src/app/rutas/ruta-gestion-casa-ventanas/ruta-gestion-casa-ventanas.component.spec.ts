import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionCasaVentanasComponent } from './ruta-gestion-casa-ventanas.component';

describe('RutaGestionCasaVentanasComponent', () => {
  let component: RutaGestionCasaVentanasComponent;
  let fixture: ComponentFixture<RutaGestionCasaVentanasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionCasaVentanasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionCasaVentanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
