import { Component,ViewChild } from '@angular/core';
import { AuthService } from './auth.service';
import { ParentComponent } from './parent/parent.component';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentmsg="Hello this message from parent to child";//PARENT MESSAGE
  
   @ViewChild(ParentComponent,{static:true}) parent; //child to parent decorater
   msgFromChild:string; //by viewchild

   childtopmsg :string; // by event emitter
  title = 'restaurent-application';
  isUserLoggedIn = false;

   constructor(private authService: AuthService,private commondata:CommonService) {}

   ngOnInit() {
      this.msgFromChild=this.parent.childmsg;//child to parent method
      let storeData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeData);

      if( storeData != null && storeData == "true")
         this.isUserLoggedIn = true;
      else

         this.isUserLoggedIn = false;

   }
   
   recieveEvent($event){
      this.childtopmsg=$event;
   } //event emitter method
}





















