import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
 

  private msgService = new BehaviorSubject<string>('Hello Iam default message from Service'); //Message for sibling
  Currentmsg =this.msgService.asObservable();

   url ="http://localhost:3000/resto"
   reurl ="http://localhost:3000/users"
   regUrl ="http://localhost:8082/api/v1/users/register"
  constructor(private _http:HttpClient) { }
  getrestolist(){
   return this._http.get(this.url);
  }
  addResto(data){
    return this._http.post(this.url,data);
  }
  deleteResto(id){
    return this._http.delete(`${this.url}/${id}`)
 }
  getCurrentData(id){
     return this._http.get(`${this.url}/${id}`)
  }
  updateResto(id,data){
    return this._http.put(`${this.url}/${id}`,data)
  }

createUser(data){
 return this._http.post(this.reurl,data);
}

//data sahre
changeservicemsg(mssgg:string){
  this.msgService.next(mssgg);
}
}
