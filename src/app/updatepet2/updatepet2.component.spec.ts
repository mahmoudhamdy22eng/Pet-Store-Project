import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatepet2Component } from './updatepet2.component';

describe('Updatepet2Component', () => {
  let component: Updatepet2Component;
  let fixture: ComponentFixture<Updatepet2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Updatepet2Component]
    });
    fixture = TestBed.createComponent(Updatepet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
