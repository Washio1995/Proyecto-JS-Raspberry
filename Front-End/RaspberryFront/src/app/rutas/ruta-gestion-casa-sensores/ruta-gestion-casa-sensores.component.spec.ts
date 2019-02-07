import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionCasaSensoresComponent } from './ruta-gestion-casa-sensores.component';

describe('RutaGestionCasaSensoresComponent', () => {
  let component: RutaGestionCasaSensoresComponent;
  let fixture: ComponentFixture<RutaGestionCasaSensoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionCasaSensoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionCasaSensoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
