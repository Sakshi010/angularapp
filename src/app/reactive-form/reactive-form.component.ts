import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import { FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
   profileForm:FormGroup;
   submitted: true;
  constructor(private fb :FormBuilder,private authset:AuthService) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstname :['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      password :['',Validators.compose([Validators.required,this.authset.patternValidator()])] , 
      confirmpassword:['',[Validators.required]],  
      lastname:['',[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z]).{2,}$')]]      
     },
     {
      validator: this.authset.matchpassword('password', 'confirmpassword'),
    }
     )
  }
  get profileControl(){
    return this.profileForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.profileForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.profileForm.value);
    }
  }
 
  updateProfile(){
    this.profileForm.patchValue({
      firstname :'Sakshi Verma',
      address :{
       Street :'123 Near Post Office'
      }
    })
  }
}
