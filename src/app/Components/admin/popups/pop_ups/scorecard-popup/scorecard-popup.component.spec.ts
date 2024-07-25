import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardPopupComponent } from './scorecard-popup.component';

describe('ScorecardPopupComponent', () => {
  let component: ScorecardPopupComponent;
  let fixture: ComponentFixture<ScorecardPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScorecardPopupComponent]
    });
    fixture = TestBed.createComponent(ScorecardPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
