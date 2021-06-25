import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() parentItem :string //decorate the property with @input decorater

  childmsg="Hello this message from child to parent"; //child to parent msg
  msgfromservice:string;
    
  @Output() childevent = new EventEmitter<string>() // Decorate the property with @output deco & EEM event
  
  childtoparent ="Helllo I am coming from the child component";
  constructor(public commondata :CommonService) { }

  ngOnInit(): void {
    this.commondata.Currentmsg.subscribe(
      (data:string)=>{
        this.msgfromservice = data;
      }
    );

  }
  sendMessage(){
    this.childevent.emit(this.childtoparent)
  }

}
