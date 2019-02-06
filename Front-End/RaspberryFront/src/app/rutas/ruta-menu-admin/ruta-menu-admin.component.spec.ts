import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMenuAdminComponent } from './ruta-menu-admin.component';

describe('RutaMenuAdminComponent', () => {
  let component: RutaMenuAdminComponent;
  let fixture: ComponentFixture<RutaMenuAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMenuAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMenuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
