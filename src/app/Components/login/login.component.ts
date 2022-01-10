import { HttpErrorResponse } from '@angular/common/http';
import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControlDirective, FormControlName } from '@angular/forms';
import { UserserviceService } from './../../../../src/app/Services/UserService/userservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  hide = true;

  constructor(
    private userService: UserserviceService,
    private snackBar: MatSnackBar,
    private router: Router
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
    this.userService.Login(this.LoginForm.value)
      .subscribe((result : any) => {
        console.log(result);
        if(result.status == true)
        {
          var params={
            UserId: result.userData.userId,
            FirstName: result.userData.firstName,
            LastName: result.userData.lastName,
            Email: result.userData.email,
            Token: result.data
          }
          localStorage.setItem('UserDetails',JSON.stringify(params));
          this.router.navigate(['/dashboard'])
        }
        this.snackBar.open(`${result.message}`, '', {duration: 3000});   
      },error =>{
        this.snackBar.open(`${error.error.message}`, '',{ duration: 3000});
    })
  }
}