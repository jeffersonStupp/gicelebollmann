import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENT/navbar/navbar.component';
import { HomeComponent } from './COMPONENT/home/home.component';
import { ListarUsuariosService } from './listar-usuarios.service';
import { UsuariocadastroComponent } from './COMPONENT/usuariocadastro/usuariocadastro.component';
import { ViewmodelsComponent } from './COMPONENT/viewmodels/viewmodels.component';
import { FooterComponent } from './COMPONENT/footer/footer.component';
import { CatalogComponent } from './COMPONENT/catalog/catalog.component';
import { ContatosListagemComponent } from './COMPONENT/contatos-listagem/contatos-listagem.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,

    UsuariocadastroComponent,
    ViewmodelsComponent,
    FooterComponent,
    CatalogComponent,
    ContatosListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ListarUsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
