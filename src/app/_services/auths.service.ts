import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const Auth_Api='http://localhost:8082/api/v1/users/register';
const httpOptions ={headers:new HttpHeaders({'Content Type':'appication/json'})};

@Injectable({
  providedIn: 'root'
})


export class AuthsService {
  constructor(private http:HttpClient) { }

  register(username:string, email:string, password:string):Observable<any>{
    return this.http.post(Auth_Api+'signup',{
      username,
      email,
      password
    },httpOptions);
  }
  login(username:string, password:string):Observable<any>{
    return this.http.post(Auth_Api+'signin',{
      username,
      password
    },httpOptions)
  }
}
