import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntjudicialComponent } from './antjudicial.component';

describe('AntjudicialComponent', () => {
  let component: AntjudicialComponent;
  let fixture: ComponentFixture<AntjudicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntjudicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntjudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
