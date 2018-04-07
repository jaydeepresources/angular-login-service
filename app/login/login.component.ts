import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  
  constructor(public log:LoginService) { 
   
  }

  ngOnInit(){
    
  }

  login(){
    this.log.login(this.email,this.password);
  }

}
