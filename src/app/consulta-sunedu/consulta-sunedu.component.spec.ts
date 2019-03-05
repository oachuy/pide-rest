import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSuneduComponent } from './consulta-sunedu.component';

describe('ConsultaSuneduComponent', () => {
  let component: ConsultaSuneduComponent;
  let fixture: ComponentFixture<ConsultaSuneduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaSuneduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSuneduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
