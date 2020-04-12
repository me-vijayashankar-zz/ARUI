import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxArteamComponent } from './inbox-arteam.component';

describe('InboxArteamComponent', () => {
  let component: InboxArteamComponent;
  let fixture: ComponentFixture<InboxArteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxArteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxArteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
