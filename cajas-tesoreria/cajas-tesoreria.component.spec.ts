import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasTesoreriaComponent } from './cajas-tesoreria.component';

describe('CajasTesoreriaComponent', () => {
  let component: CajasTesoreriaComponent;
  let fixture: ComponentFixture<CajasTesoreriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajasTesoreriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajasTesoreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
