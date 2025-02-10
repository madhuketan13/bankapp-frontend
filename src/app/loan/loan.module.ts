import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoanRoutingModule } from './loan-routing.module';
import { LoanComponent } from './components/loan-form/loan/loan.component';
import { LoanService } from './services/loan.service';
import { httpInterceptors } from '../shared/interceptors';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoanComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LoanRoutingModule
  ],
  providers: [httpInterceptors,LoanService]
})
export class LoanModule { }
