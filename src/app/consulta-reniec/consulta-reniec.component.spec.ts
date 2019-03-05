import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaReniecComponent } from './consulta-reniec.component';

describe('ConsultaReniecComponent', () => {
  let component: ConsultaReniecComponent;
  let fixture: ComponentFixture<ConsultaReniecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaReniecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaReniecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
