import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArApproverComponent } from './ar-approver.component';

describe('ArApproverComponent', () => {
  let component: ArApproverComponent;
  let fixture: ComponentFixture<ArApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
