import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionCasaCuartosComponent } from './ruta-gestion-casa-cuartos.component';

describe('RutaGestionCasaCuartosComponent', () => {
  let component: RutaGestionCasaCuartosComponent;
  let fixture: ComponentFixture<RutaGestionCasaCuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionCasaCuartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionCasaCuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
