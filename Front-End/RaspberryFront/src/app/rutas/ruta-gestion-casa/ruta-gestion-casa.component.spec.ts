import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionCasaComponent } from './ruta-gestion-casa.component';

describe('RutaGestionCasaComponent', () => {
  let component: RutaGestionCasaComponent;
  let fixture: ComponentFixture<RutaGestionCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
