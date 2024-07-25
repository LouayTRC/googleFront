import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedComponentComponent } from './shared-component.component';

describe('SharedComponentComponent', () => {
  let component: SharedComponentComponent;
  let fixture: ComponentFixture<SharedComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedComponentComponent]
    });
    fixture = TestBed.createComponent(SharedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
