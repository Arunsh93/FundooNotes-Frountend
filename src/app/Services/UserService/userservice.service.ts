import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../HttpServices/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpService:HttpService) { }

  Register(data: any) {
    let params = {
        FirstName: data.firstName,
        LastName: data.lastName,
        Email: data.email,
        Password: data.password
    } 
    return this.httpService.post(`${environment.baseurl}api/register`, params);
  }
  
  Login(data: any){
    let params = {
      Email: data.email,
      Password: data.password
    }
    return this.httpService.post(`${environment.baseurl}api/login`, params);
  }

  ForgotPassword(data: any){
    return this.httpService.post(`${environment.baseurl}api/forgotPassword?EmailId=${data}`);
  }

  ResetPassword(email:string,data: any){
    let params = {
      EmailId: data.email,
      NewPassword: data.password
    }
    return this.httpService.put(`${environment.baseurl}api/resetPassword`, params);
  }
}
