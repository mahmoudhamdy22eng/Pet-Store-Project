import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStoresComponent } from './table-stores.component';

describe('TableStoresComponent', () => {
  let component: TableStoresComponent;
  let fixture: ComponentFixture<TableStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableStoresComponent]
    });
    fixture = TestBed.createComponent(TableStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
