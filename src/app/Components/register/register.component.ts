import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserserviceService } from './../../../../src/app/Services/UserService/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm!: FormGroup;
  hide = true;

  constructor(
    private userService: UserserviceService
  ) { }

  ngOnInit(): void {
    this.RegisterForm = new FormGroup(
      {
        firstName: new FormControl('',[Validators.required, Validators.pattern('^[A-Z]{1}[A-Z a-z]{2,}'),Validators.minLength(3)]),
        lastName : new FormControl('',[Validators.required, Validators.pattern('^[A-Za-z]{1}[A-Z a-z]{2,}'),Validators.minLength(3)]),
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
        confirmPassword: new FormControl('',[Validators.required])
      }
    );
  }

  Register()
  {
    try{
      this.userService.Register(this.RegisterForm.value)
      .subscribe((result : any) => {
          if(result.status)
          console.log("Register is Successfull", result);
      })
    }
    catch(error)
    {
      console.log(error)
    }
  }
}