import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPopupComponent } from './modify-popup.component';

describe('ModifyPopupComponent', () => {
  let component: ModifyPopupComponent;
  let fixture: ComponentFixture<ModifyPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyPopupComponent]
    });
    fixture = TestBed.createComponent(ModifyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
