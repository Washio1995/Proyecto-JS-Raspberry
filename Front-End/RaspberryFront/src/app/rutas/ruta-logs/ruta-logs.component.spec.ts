import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaLogsComponent } from './ruta-logs.component';

describe('RutaLogsComponent', () => {
  let component: RutaLogsComponent;
  let fixture: ComponentFixture<RutaLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
