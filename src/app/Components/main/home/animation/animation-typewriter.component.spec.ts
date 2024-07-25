import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationTypewriterComponent } from './animation-typewriter.component';

describe('AnimationTypewriterComponent', () => {
  let component: AnimationTypewriterComponent;
  let fixture: ComponentFixture<AnimationTypewriterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationTypewriterComponent]
    });
    fixture = TestBed.createComponent(AnimationTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
