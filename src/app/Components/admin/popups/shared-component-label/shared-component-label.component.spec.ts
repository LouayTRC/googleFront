import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedComponentLabelComponent } from './shared-component-label.component';

describe('SharedComponentLabelComponent', () => {
  let component: SharedComponentLabelComponent;
  let fixture: ComponentFixture<SharedComponentLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedComponentLabelComponent]
    });
    fixture = TestBed.createComponent(SharedComponentLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
