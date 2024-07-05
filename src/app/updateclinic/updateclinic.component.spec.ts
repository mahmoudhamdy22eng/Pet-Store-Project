import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateclinicComponent } from './updateclinic.component';

describe('UpdateclinicComponent', () => {
  let component: UpdateclinicComponent;
  let fixture: ComponentFixture<UpdateclinicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateclinicComponent]
    });
    fixture = TestBed.createComponent(UpdateclinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
