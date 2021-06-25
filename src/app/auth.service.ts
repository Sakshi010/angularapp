import { Injectable } from '@angular/core';
import { ValidatorFn ,FormGroup,AbstractControl} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;

   login(userName: string, password: string): Observable<any> {
      console.log(userName);
      console.log(password);
      this.isUserLoggedIn = userName == 'admin' && password == 'admin';
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 

   return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
   }
   logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   };
     

   // ^ - start of string
   // (?=[^A-Z]*[A-Z]) - at least 1 uppercase ASCII letter
   // (?=[^a-z]*[a-z]) - at least 1 lowercase ASCII letter
   // (?=[^0-9]*[0-9]) - at least 1 ASCII digit
   // .{8,} - any 8 or more chars (other than line break chars)
   // $ - end of string.
   // Password Validation
   patternValidator():ValidatorFn{
     return(control:AbstractControl):{[key:string]:any}=>{
        if(!control.value){
           return null;
        }
        const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
         const valid = regex.test(control.value);
         return valid ?null:{invalidPassword:true};
     } 
   }
matchpassword(password:string,confirmpassword:string){
   return(formgroup:FormGroup)=>{
      const passwordControl =formgroup.controls[password];
      const confirmpasswordControl = formgroup.controls[confirmpassword];
      if(!passwordControl || ! confirmpasswordControl){
         return null;
      }
      if(confirmpasswordControl.errors && !confirmpasswordControl.errors.passwordMismatch){
         return null;
      }
      if(passwordControl.value !== confirmpasswordControl.value){
         confirmpasswordControl.setErrors({passwordMismatch:true});
      }else{
         confirmpasswordControl.setErrors(null);
      }
 
   }
}

  constructor() { }
}
