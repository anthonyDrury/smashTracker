import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmashPlayerWinComponent } from './smash-player-win.component';

describe('SmashPlayerWinComponent', () => {
  let component: SmashPlayerWinComponent;
  let fixture: ComponentFixture<SmashPlayerWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmashPlayerWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmashPlayerWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
