import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTestHWComponent } from './ngx-test-hw.component';

describe('NgxTestHWComponent', () => {
  let component: NgxTestHWComponent;
  let fixture: ComponentFixture<NgxTestHWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTestHWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTestHWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
