import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateownerComponent } from './updateowner.component';

describe('UpdateownerComponent', () => {
  let component: UpdateownerComponent;
  let fixture: ComponentFixture<UpdateownerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateownerComponent]
    });
    fixture = TestBed.createComponent(UpdateownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
