import { Component, OnInit } from '@angular/core';
import{CommonService} from '../common.service';
import{FormGroup,FormControl} from '@angular/forms';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-restaurent',
  templateUrl: './update-restaurent.component.html',
  styleUrls: ['./update-restaurent.component.css']
})
export class UpdateRestaurentComponent implements OnInit {
  alert:boolean=false;
  editRestaurent=new FormGroup({
    name : new FormControl(''),
    address : new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl('')
  });
  constructor(private resto:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editRestaurent=new FormGroup({
        name : new FormControl(result['name']),
        address : new FormControl(result['address']),
        email:new FormControl(result['email']),
        mobile:new FormControl(result['mobile'])
      });
    })
  }
  updateResto(){
    this.resto.updateResto(this.router.snapshot.params.id,this.editRestaurent.value).subscribe((result)=>{
      console.log(result,"Data updated")
      this.alert=true
    })
  }
  closeAlert(){
    this.alert=false;
  }
}
