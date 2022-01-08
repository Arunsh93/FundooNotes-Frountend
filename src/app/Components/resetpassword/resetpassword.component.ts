import { HttpErrorResponse } from '@angular/common/http';
import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControlDirective } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from './../../../../src/app/Services/UserService/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  ResetPasswordForm!: FormGroup;
  hide = true;

  constructor(
    private userService: UserserviceService
  ) { }

  ngOnInit(): void {
    this.ResetPasswordForm = new FormGroup(
      {
        password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
        confirmPassword: new FormControl('',[Validators.required])
      }
    );
  }

  ResetPassword(){
    try{
      
    }
    catch(error)
    {
      console.log(error);
    }
  }
}