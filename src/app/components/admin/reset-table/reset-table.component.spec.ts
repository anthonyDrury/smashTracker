import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetTableComponent } from './reset-table.component';

describe('ResetTableComponent', () => {
  let component: ResetTableComponent;
  let fixture: ComponentFixture<ResetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
