import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeposit } from '../../../models/ideposit';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  deposit: IDeposit = {

    amount: 0,
    accountId: ''

  }

  ngOnInit(): void {
  }

  onDeposit(): void {
    this.deposit.accountId = JSON.parse(localStorage.getItem('profileDetails') || '').accountId;
    this.accountService.deposit(this.deposit).subscribe((res) => {
      console.log('deposit successful')
      this.router.navigate(['/dashboard']);
    },
    (err) => {
      console.log(err);
    })
    
  }

}
