import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {User} from "../../shared/user/user"

@Component({
    selector: "welcome-register",
    templateUrl:"pages/registration/registration.html",
})
export class RegistrationPage implements OnInit {

   public secondPage: boolean = false;
   public user : User;

   constructor(private page: Page){
       this.secondPage = false;
       this.user = new User();
   }

   ngOnInit(){
     this.page.actionBarHidden = true;
   }

   next(){
     this.secondPage = true;
   }

   register(){
     
   }
}
