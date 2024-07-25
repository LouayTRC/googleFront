import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignoutPopupComponent } from './signout-popup.component';

describe('SignoutPopupComponent', () => {
  let component: SignoutPopupComponent;
  let fixture: ComponentFixture<SignoutPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignoutPopupComponent]
    });
    fixture = TestBed.createComponent(SignoutPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
