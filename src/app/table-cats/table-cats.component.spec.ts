import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCatsComponent } from './table-cats.component';

describe('TableCatsComponent', () => {
  let component: TableCatsComponent;
  let fixture: ComponentFixture<TableCatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCatsComponent]
    });
    fixture = TestBed.createComponent(TableCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
