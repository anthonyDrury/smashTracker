import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetOweingModalComponent } from './reset-oweing-modal.component';

describe('ResetOweingModalComponent', () => {
  let component: ResetOweingModalComponent;
  let fixture: ComponentFixture<ResetOweingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetOweingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetOweingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
