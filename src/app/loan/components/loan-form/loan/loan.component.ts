import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoan } from '../../../models/iloan';
import { LoanService } from '../../../services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  constructor(private loanService: LoanService,private router: Router) { }

  loan: ILoan = {
    loanType: [],
    loanAmount: 0,
    loanStatus: '',
    appliedDate: '',
    accountId: ''
  }

  ngOnInit(): void {
  }

  onLoanApplication(): void {

    this.loan.accountId = JSON.parse(localStorage.getItem('profileDetails') || "").accountId;

    if (typeof this.loan.loanType === 'string') {
      this.loan.loanType = [this.loan.loanType];
    }

    this.loanService.createLoan(this.loan).subscribe((res: any) => {
      localStorage.setItem("loanDetails", JSON.stringify(res));
      this.router.navigate(['/dashboard']);
    },
    (err: any) => {
      console.log(err);
    })

  }

}
