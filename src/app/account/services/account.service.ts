import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAccount } from '../models/iaccount';
import { Observable } from 'rxjs';
import { IDeposit } from '../models/ideposit';
import { IWithdraw } from '../models/iwithdraw';

const headerData = {
  headers: { 'Content-Type': 'application/json' },
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {}

  endPoint: String = 'api/account';
  accountDetails: any;

  getAccount(userId: number): Observable<any> {
    return this.httpClient.get(this.endPoint + '/getAccount/' + userId);
  }

  createAccount(account: IAccount): Observable<any>{
    console.log(account);
    return this.httpClient.post(
        this.endPoint + '/create',
        account,
        headerData
    )
  }

  updateAccount(account: IAccount): Observable<any>{
    this.accountDetails = JSON.parse(localStorage.getItem('accountDetails') || '');
    return this.httpClient.put(`${this.endPoint}/update/${this.accountDetails.accountId}`, account);
  }

  deposit(deposit: IDeposit): Observable<any>{
    return this.httpClient.post(
      this.endPoint + '/deposit',
      deposit,
      headerData
    )
  }

  withdraw(withdraw: IWithdraw): Observable<any>{
    return this.httpClient.post(
      this.endPoint + '/withdraw',
      withdraw,
      headerData
    )
  }
}
