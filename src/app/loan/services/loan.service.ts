import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoan } from '../models/iloan';
import { Observable } from 'rxjs';


const headerData = {
  headers: { 'Content-Type': 'application/json' },
};

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private httpClient: HttpClient) { }

  endPoint: String = 'api/loan';
  
  createLoan(loan: ILoan): Observable<any>{
    return this.httpClient.post(
        this.endPoint + '/create',
        loan,
        headerData
    )
  }

  getLoansForAccount(accountId: string): Observable<any>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    });
    return this.httpClient.get(`${this.endPoint}/getLoan/${accountId}`, { headers });
  }


}
