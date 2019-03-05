import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSidebarComponent } from './local-sidebar.component';

describe('LocalSidebarComponent', () => {
  let component: LocalSidebarComponent;
  let fixture: ComponentFixture<LocalSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
