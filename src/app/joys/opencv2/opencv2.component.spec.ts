import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opencv2Component } from './opencv2.component';

describe('Opencv2Component', () => {
  let component: Opencv2Component;
  let fixture: ComponentFixture<Opencv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Opencv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Opencv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
