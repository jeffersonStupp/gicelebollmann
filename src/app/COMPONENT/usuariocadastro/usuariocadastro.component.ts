import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuariocadastro',
  templateUrl: './usuariocadastro.component.html',
  styleUrls: ['./usuariocadastro.component.css']
})
export class UsuariocadastroComponent implements OnInit {
  nome:string="";
  email:string="";
  telefone:string="";
  nickname:string="";
  password:string="";
  confpass:string="";

  Cadastrar(){

if(this.nome=""){
  alert("Nome invalido")

}else if(this.nome.length<3){
  alert("nome invalido")
}else{

  console.log("nome:" , this.nome)
}
if(this.email=""){
  alert("E-Mail invalido")

}else if(this.email.indexOf("@")){
  alert("E-Mail invalido")
}else{
  console.log("email:" , this.email)

}


  // console.log("telefone:" , this.telefone)
  // console.log("nickname:" , this.nickname)
  // console.log("password:" , this.password)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
