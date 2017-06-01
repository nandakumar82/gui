import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public formError: string;
  public loginError = false;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      password: ['', Validators.compose([Validators.required])]
    });

    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
    this.formError = "Username and password are required";
  }

  public onsubmit(values:Object):void {
    this.loginError = true;
    this.formError = "Oops, you have entered invalid username or password. Please try again.";
  }
  ngOnInit() {
  }

}
