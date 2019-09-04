import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmashPlayerTotalComponent } from './smash-player-total.component';

describe('SmashPlayerTotalComponent', () => {
  let component: SmashPlayerTotalComponent;
  let fixture: ComponentFixture<SmashPlayerTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmashPlayerTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmashPlayerTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
