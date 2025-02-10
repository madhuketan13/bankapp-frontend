import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoansRowComponent } from './dashboard-loans-row.component';

describe('DashboardLoansRowComponent', () => {
  let component: DashboardLoansRowComponent;
  let fixture: ComponentFixture<DashboardLoansRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLoansRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLoansRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
