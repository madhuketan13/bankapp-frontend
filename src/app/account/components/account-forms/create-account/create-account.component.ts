import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { IAccount } from '../../../models/iaccount';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: IAccount = {
    accountStatus: '' ,
    accountType: '' ,
    accountBalance: '',
    pancardNumber: '',
    aadharcardNumber: '',
    createDateTime:'',
    userId: 0
  }

  constructor(private accountService: AccountService , private router: Router) { }

  ngOnInit(): void {
  }

  createAccount(): void {

    this.account.userId = JSON.parse(localStorage.getItem('userDetails') || '').id;
    console.log(this.account.userId);
    this.accountService.createAccount(this.account).subscribe(
      (res) => {
        localStorage.setItem("accountDetails", JSON.stringify(res));
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(err);
      }
    )

  }
}
