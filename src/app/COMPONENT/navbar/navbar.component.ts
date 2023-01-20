import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nickname:string="";
password:string="";





logar(){
  alert("logado");
  console.log("nickname:" , this.nickname)
  console.log("password:" , this.password)

}

  constructor() { }

  ngOnInit(): void {
  }

}
