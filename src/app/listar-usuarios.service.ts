import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  listarusuariosUrl='https://localhost:7294/listarTodos';
  constructor(private http:HttpClient) { }

  listar(){
return this.http.get<any[]>(`${this.listarusuariosUrl}`)
  }
}
