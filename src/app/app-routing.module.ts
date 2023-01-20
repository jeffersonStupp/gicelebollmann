import { UsuariocadastroComponent } from './COMPONENT/usuariocadastro/usuariocadastro.component';
import { HomeComponent } from './COMPONENT/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'usuariocadastro.component.html',component:UsuariocadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
