import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDogsComponent } from './table-dogs.component';

describe('TableDogsComponent', () => {
  let component: TableDogsComponent;
  let fixture: ComponentFixture<TableDogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableDogsComponent]
    });
    fixture = TestBed.createComponent(TableDogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
