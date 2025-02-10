import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard-page/dashboard/dashboard.component';
import { DashboardActionComponent } from './components/dashboard-page/dashboard-action/dashboard-action.component';
import { DashboardCreateaccountComponent } from './components/dashboard-page/dashboard-createaccount/dashboard-createaccount.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountModule } from '../account/account.module';
import { AccountService } from '../account/services/account.service';
import { httpInterceptors } from '../shared/interceptors';
import { DashboardLoansComponent } from './components/dashboard-page/dashboard-loans/dashboard-loans.component';
import { DashboardLoansRowComponent } from './components/dashboard-page/dashboard-loans/dashboard-loans-row/dashboard-loans-row.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardActionComponent,
    DashboardCreateaccountComponent,
    DashboardLoansComponent,
    DashboardLoansRowComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule
  ],
  providers:[AccountService,httpInterceptors]
})
export class DashboardModule { }
