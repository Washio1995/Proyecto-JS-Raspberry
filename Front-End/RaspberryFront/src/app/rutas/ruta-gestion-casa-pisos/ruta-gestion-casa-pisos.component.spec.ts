import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionCasaPisosComponent } from './ruta-gestion-casa-pisos.component';

describe('RutaGestionCasaPisosComponent', () => {
  let component: RutaGestionCasaPisosComponent;
  let fixture: ComponentFixture<RutaGestionCasaPisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionCasaPisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionCasaPisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
