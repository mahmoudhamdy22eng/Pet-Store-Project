import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepetComponent } from './updatepet.component';

describe('UpdatepetComponent', () => {
  let component: UpdatepetComponent;
  let fixture: ComponentFixture<UpdatepetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatepetComponent]
    });
    fixture = TestBed.createComponent(UpdatepetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
