import { Component, Input, OnInit } from '@angular/core';
import { LoanService } from '../../../../loan/services/loan.service';


@Component({
  selector: 'app-dashboard-loans',
  templateUrl: './dashboard-loans.component.html',
  styleUrls: ['./dashboard-loans.component.css']
})
export class DashboardLoansComponent implements OnInit {

  loans: any[] = [];
  accountDetails: any = {};

  constructor(private loanService: LoanService) { }
  ngOnInit(): void {
    this.accountDetails = JSON.parse(localStorage.getItem('accountDetails') || '');
    this.fetchLoans();
    
  }

  fetchLoans(): void {
    this.loanService.getLoansForAccount(this.accountDetails.accountId).subscribe((res) =>{
      this.loans = res;
    },(err) => {
      console.error('Error fetching loans:', err);
    });
  }
  

}
