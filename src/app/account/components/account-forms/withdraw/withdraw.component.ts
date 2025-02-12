import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { IWithdraw } from '../../../models/iwithdraw';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  withdraw: IWithdraw = {
    accountId: '',
    amount: 0,
  }
  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
  }

  onWithdrawal() : void {
    this.withdraw.accountId = JSON.parse(localStorage.getItem('profileDetails') || '').accountId;
    this.accountService.withdraw(this.withdraw).subscribe((res: any) => {
      console.log('withdraw successful')
      this.router.navigate(['/dashboard']);
    },
    (err: any) => {
      console.log(err);
    })
  }

}
