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

if(this.nome.length<3){
  alert("Nome invalido")


}else{

  console.log("nome:" , this.nome)
}
if(this.email.length<3){
  alert("E-Mail invalido")


}else{
  console.log("email:" , this.email)

}
if(this.password != this.confpass){
  alert("Senhas Invalidas")
}else{
  console.log("password:" , this.password)
}


  // console.log("telefone:" , this.telefone)
  // console.log("nickname:" , this.nickname)
  //

  }

  constructor() { }

  ngOnInit(): void {
  }

}
