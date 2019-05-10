import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firstname = '';
  cpassword = '';
  lastname = '';
  email = '';
  password = '';

  constructor(private registrationService: RegistrationService, private router: Router) {}

  ngOnInit() {
  }

  addUser() {
    const user = {
      firstName: this.firstname,
      lastName: this.lastname,
      emailID: this.email,
      password: this.password,
      confirmPassword: this.cpassword
    };
    console.log(user);
    this.registrationService.getUser(user).subscribe(data => {
      this.router.navigate(['/login']);
    });
  }
}
