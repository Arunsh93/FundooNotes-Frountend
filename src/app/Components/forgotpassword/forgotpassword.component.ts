import { HttpErrorResponse } from '@angular/common/http';
import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControlDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from './../../../../src/app/Services/UserService/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  ForgotPasswordForm!: FormGroup;

  constructor(
    private userService: UserserviceService
  ) { }

  ngOnInit(): void {
    this.ForgotPasswordForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email])
      }
    );
  }

  ForgotPassword(){
    try
    {
      this.userService.ForgotPassword(this.ForgotPasswordForm.value.email)
      .subscribe((result : any) => {
        if(result.stasus)
        console.log("Email Send Successfully", result);
      })
    }
    catch(error)
    {
      console.log(error);
    }
  }
}