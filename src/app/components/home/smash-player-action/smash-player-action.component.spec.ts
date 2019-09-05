import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmashPlayerActionComponent } from './smash-player-action.component';

describe('SmashPlayerActionComponent', () => {
  let component: SmashPlayerActionComponent;
  let fixture: ComponentFixture<SmashPlayerActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmashPlayerActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmashPlayerActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
