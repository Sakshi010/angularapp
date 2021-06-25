import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import {  FormGroup,FormBuilder,Validators,ValidatorFn  } from '@angular/forms';
import{CommonService} from '../common.service';
import { encode, decode } from 'hi-base32';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean=false;
  createUser:FormGroup;
  constructor(private resto:CommonService,private FB:FormBuilder,private authset:AuthService) { }

  ngOnInit(): void {
    this.createUser=this.FB.group({
      firstName : ['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password :['',Validators.required],        
    }); 
  }
  regUser(){
    if(this.createUser.valid){
      this.resto.createUser(this.createUser.value).subscribe((result)=>
         console.log('result',result)
      )
     alert("Form successful")
    }
    else(
      alert("Form Invalid")
    )
    // console.log(this.createUser.value);
    // this.resto.createUser(this.createUser.value).subscribe((result)=>{
    //  console.log(result,"Data created")
    //  this.alert=true
    // })
  }
  closeAlert(){
    this.alert=false;
  }
}
