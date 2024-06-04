import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicComponent } from './clinic.component';

describe('ClinicComponent', () => {
  let component: ClinicComponent;
  let fixture: ComponentFixture<ClinicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicComponent]
    });
    fixture = TestBed.createComponent(ClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
