import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmashPlayerBiggestComponent } from './smash-player-biggest.component';

describe('SmashPlayerBiggestComponent', () => {
  let component: SmashPlayerBiggestComponent;
  let fixture: ComponentFixture<SmashPlayerBiggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmashPlayerBiggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmashPlayerBiggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
