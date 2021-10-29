import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TituloComponent } from './titulo/titulo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';
import { ServicioclienteComponent } from './serviciocliente/serviciocliente.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TituloComponent,
    NoticiasComponent,
    DetalleNoticiaComponent,
    ServicioclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
