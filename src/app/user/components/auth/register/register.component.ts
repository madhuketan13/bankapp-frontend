import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { IRegister } from '../../../models/iregister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: IRegister = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  registerSubmit() {
    this.userService.registerUser(this.register).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));
        this.router.navigate(['/login']);
      },
      (err: any) => console.log(err)
    );
  }

}
