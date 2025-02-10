import { Injectable } from '@angular/core';
import { IRegister } from '../models/iregister';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../models/ilogin';

const headerData = {
  headers: { 'Content-Type': 'application/json' },
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  
  endPoint: string = '/api/authenticate';

  registerUser(register: IRegister): Observable<any> {
    return this.httpClient.post(
      this.endPoint + '/signup',
      register,
      headerData
    );
  }

  loginUser(login: ILogin): Observable<any> {
    return this.httpClient.post(this.endPoint + '/login', login, headerData);
  }
}
