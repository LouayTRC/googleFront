import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardsComponent } from './scorecards.component';

describe('ScorecardsComponent', () => {
  let component: ScorecardsComponent;
  let fixture: ComponentFixture<ScorecardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScorecardsComponent]
    });
    fixture = TestBed.createComponent(ScorecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
