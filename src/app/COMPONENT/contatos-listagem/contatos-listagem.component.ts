import { ListarUsuariosService } from './../../listar-usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos:Array<any> | undefined;
  constructor(private listarUsuariosService:ListarUsuariosService) { }

  ngOnInit(): void {
    this.Listar();
  }
Listar(){
this.listarUsuariosService.listar().subscribe(dados=> this.contatos=dados)
}
}
