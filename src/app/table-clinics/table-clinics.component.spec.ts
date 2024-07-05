import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClinicsComponent } from './table-clinics.component';

describe('TableClinicsComponent', () => {
  let component: TableClinicsComponent;
  let fixture: ComponentFixture<TableClinicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableClinicsComponent]
    });
    fixture = TestBed.createComponent(TableClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
