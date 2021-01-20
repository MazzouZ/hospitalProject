import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username:String;
  password:String;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username = "";
    this.password= "";
  }

  public save(){
    if(this.username == "admin" && this.password == "admin")
       this.router.navigate(["/"]);
    else
      alert("username ou mode de passe incorrecte");

  }


}
