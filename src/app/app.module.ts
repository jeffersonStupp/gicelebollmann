import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENT/navbar/navbar.component';
import { HomeComponent } from './COMPONENT/home/home.component';

import { UsuariocadastroComponent } from './COMPONENT/usuariocadastro/usuariocadastro.component';
import { ViewmodelsComponent } from './COMPONENT/viewmodels/viewmodels.component';
import { FooterComponent } from './COMPONENT/footer/footer.component';
import { CatalogComponent } from './COMPONENT/catalog/catalog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,

    UsuariocadastroComponent,
    ViewmodelsComponent,
    FooterComponent,
    CatalogComponent
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
