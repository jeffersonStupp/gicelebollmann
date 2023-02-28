import { ContatosListagemComponent } from './COMPONENT/contatos-listagem/contatos-listagem.component';
import { UsuariocadastroComponent } from './COMPONENT/usuariocadastro/usuariocadastro.component';
import { HomeComponent } from './COMPONENT/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './COMPONENT/catalog/catalog.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'usuariocadastro.component.html',component:UsuariocadastroComponent},
{path:'catalog.component.html',component:CatalogComponent},
{path:'contatos-listagem.component.html',component:ContatosListagemComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
