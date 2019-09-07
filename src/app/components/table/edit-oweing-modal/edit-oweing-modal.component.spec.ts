import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOweingModalComponent } from './edit-oweing-modal.component';

describe('EditOweingModalComponent', () => {
  let component: EditOweingModalComponent;
  let fixture: ComponentFixture<EditOweingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOweingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOweingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
