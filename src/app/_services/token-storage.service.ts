import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

const Token_Key ='auth-token';
const User_Key ='auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }
  //Get Token
  public getToken(): string | null{   
    return window.sessionStorage.getItem(Token_Key);
  }

  //Save Token
  public saveToken(token:string):void{
    window.sessionStorage.removeItem(Token_Key);
    window.sessionStorage.setItem(Token_Key,token);
  }

  //Get User
  public getUser():any{
    const user = window.sessionStorage.getItem(User_Key);
    if(user){
        return JSON.parse(user);
    }
    return{};
  }

  //Save User
  public saveUser(user:any):void{
    window.sessionStorage.removeItem(User_Key);
    window.sessionStorage.setItem(User_Key,JSON.stringify(user));
  }

  //Logout
   signout():void{
     window.sessionStorage.clear();
  }
}

