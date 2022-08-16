import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  email: string;
  password: string;
  loginForm: FormGroup;
  authenticated = true;

  constructor(
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
    let email = new FormControl(this.email,[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]);
    let password = new FormControl(this.password,[Validators.required,Validators.pattern(/^.{6,}$/)]);
    this.loginForm = new FormGroup({
      email: email,
      password: password
    })
  }

  validateEmail() {
    return this.loginForm.controls.email?.invalid && this.loginForm.controls.email?.touched;
  }

  validatePassword() {
    return this.loginForm.controls.password?.invalid && this.loginForm.controls.password?.touched;
  }


  login(formValues: any) {
    if (this.loginForm.valid) {
      this.authService.loginUser(formValues.value.email, formValues.value.password).then(error => {
        console.log(error)
        this.authenticated = false;
      });
    };
  }

  cancel() {
    this.router.navigate(['home']);
  }
}
