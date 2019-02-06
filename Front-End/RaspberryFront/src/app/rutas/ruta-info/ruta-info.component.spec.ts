import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInfoComponent } from './ruta-info.component';

describe('RutaInfoComponent', () => {
  let component: RutaInfoComponent;
  let fixture: ComponentFixture<RutaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
