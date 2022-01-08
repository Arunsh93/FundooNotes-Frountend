import { HttpErrorResponse } from '@angular/common/http';
import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControlDirective, FormControlName } from '@angular/forms';
import { UserserviceService } from './../../../../src/app/Services/UserService/userservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  hide = true;

  constructor(
    private userService: UserserviceService
  ) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup(
      {
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required])
      }
    );
  }

  Login(){
    try{
      this.userService.Login(this.LoginForm.value)
      .subscribe((result : any) => {
        if(result.status)
        console.log("Login is Successfull", result); 
      })
    }
    catch(error)
    {
      console.log(error);
    }
  }
}