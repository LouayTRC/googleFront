import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsPopupComponent } from './points-popup.component';

describe('PointsPopupComponent', () => {
  let component: PointsPopupComponent;
  let fixture: ComponentFixture<PointsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointsPopupComponent]
    });
    fixture = TestBed.createComponent(PointsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
