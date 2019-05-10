import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailID = '';
  password = '';
  InvalidUser = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  userLogin() {
    const user = {
      emailID: this.emailID,
      password: this.password
    };
    localStorage.setItem('LoggedinEmailId', user.emailID );

    this.loginService.getloggedinUser(user).subscribe( (data) => {
      console.log(data);
      // @ts-ignore
      if (data.message === 'Success') {
        console.log('after service call', data);
        this.router.navigate(['./connect']);
        // @ts-ignore
        console.log(data.message);
      } else {
        // @ts-ignore
        console.log(data.message);
        this.InvalidUser = true;
      }
    });
  }

}
