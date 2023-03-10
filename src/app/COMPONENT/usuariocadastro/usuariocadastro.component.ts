import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usuariocadastro',
  templateUrl: './usuariocadastro.component.html',
  styleUrls: ['./usuariocadastro.component.css']
})
export class UsuariocadastroComponent implements OnInit {
  @Output() aocadastrar = new EventEmitter<any>();
  nome:string="";
  email:string="";
  telefone:string="";
  nickname:string="";
  password:string="";
  confpass:string="";

  AddUser(){
    this.nome=this.nome
if (this.nome==""){
  alert("Nome não inserido")
}
else if(this.nome.length<3){
  alert("Nome invalido")
}else{
  console.log("nome:" , this.nome)
}
this.email=this.email
if(this.email==""){
alert("E-Mail não inserido")
}
else if(this.email.length<3){
alert("E-Mail invalido")
}else{
  console.log("email:" , this.email)
}
this.telefone=this.telefone
if(this.telefone.length<=10){
  alert("Numero de telefone inválido")
}else{
  console.log("telefone:" , this.telefone)
}
this.nickname=this.nickname
console.log("nickname:" , this.nickname)
this.password=this.password;
this.confpass=this.confpass;

if(this.password != this.confpass){
  alert("Senhas Invalidas")
}else if (this.password.length<6){
  alert("voçê precisa ter pelo menos 6 caracteres")
}else{
  console.log("password:" , this.password)
    }
    this.aocadastrar.emit({nome:this.nome, email:this.email, telefone:this.telefone, nickname:this.nickname, password:this.password})





  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
