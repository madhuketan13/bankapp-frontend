import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../account/services/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  userDetails: any = {};
  account: any = {};

  flag: Boolean = false;

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '');

    this.accountService.getAccount(this.userDetails.id).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem("profileDetails", JSON.stringify(res));
        this.account = res;
      },
      (err) => {
        console.log(err.status);
        if (err.status == 404) {
          this.flag = true;
        }
      }
    );

  }

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }

}
