import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  endPoint: String = 'api/loan';

  getAllLoans(): Observable<any> {

    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json'
    });
    return this.httpClient.get(this.endPoint + '/pending',{headers});
  }

  updateLoanStatus(loanId: string, status: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
});
    return this.httpClient.put(`${this.endPoint}/${loanId}/status?status=${status}`,null,{headers});
  }
}
