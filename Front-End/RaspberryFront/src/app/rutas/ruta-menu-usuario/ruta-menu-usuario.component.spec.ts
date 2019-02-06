import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMenuUsuarioComponent } from './ruta-menu-usuario.component';

describe('RutaMenuUsuarioComponent', () => {
  let component: RutaMenuUsuarioComponent;
  let fixture: ComponentFixture<RutaMenuUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMenuUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMenuUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
