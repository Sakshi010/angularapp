import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  msgfromservice:string;

  constructor(public commondata :CommonService) { }

  ngOnInit(): void {

    this.commondata.Currentmsg.subscribe(
      (data:string)=>{
        this.msgfromservice = data;
      }
    );

  }
  changeservicemsg(){
    this.commondata.changeservicemsg("Change default msg from child")
  }
}
