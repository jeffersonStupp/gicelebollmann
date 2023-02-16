import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENT/navbar/navbar.component';
import { HomeComponent } from './COMPONENT/home/home.component';
import { CarrosselComponent } from './COMPONENT/carrossel/carrossel.component';
import { UsuariocadastroComponent } from './COMPONENT/usuariocadastro/usuariocadastro.component';
import { ViewmodelsComponent } from './COMPONENT/viewmodels/viewmodels.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarrosselComponent,
    UsuariocadastroComponent,
    ViewmodelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
