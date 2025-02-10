import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCreateaccountComponent } from './dashboard-createaccount.component';

describe('DashboardCreateaccountComponent', () => {
  let component: DashboardCreateaccountComponent;
  let fixture: ComponentFixture<DashboardCreateaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCreateaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCreateaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
