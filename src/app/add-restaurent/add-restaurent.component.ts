import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import{CommonService} from '../common.service'
@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css']
})
export class AddRestaurentComponent implements OnInit {
  alert:boolean=false;
  addRestaurent=new FormGroup({
    name : new FormControl(''),
    address : new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl('')
  });
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
    
  }
  createResto(){
    this.resto.addResto(this.addRestaurent.value).subscribe((result)=>{
      this.alert=true;
      this.addRestaurent.reset({});
       console.log("Data get From Service",result)
    })
  }
  closeAlert(){
    this.alert=false;
  }
}
