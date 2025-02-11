import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { ILogin } from '../../../models/ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: ILogin = { username: '', password: '' };
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  loginSubmit(){
    this.userService.loginUser(this.login).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));
        localStorage.setItem('userDetails', JSON.stringify(res));
        localStorage.setItem('token', res.token);
        const roles = res.roles;
        if(roles.includes('ROLE_ADMIN')){
          this.router.navigate(['/admin']);
        }
        else{
          this.router.navigate(['/dashboard']);
        }
      },
      (err: any) => console.log(err)
    );
  }

}
