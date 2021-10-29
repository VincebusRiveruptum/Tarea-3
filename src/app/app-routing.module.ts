import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TituloComponent } from './titulo/titulo.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';
import { ServicioclienteComponent } from './serviciocliente/serviciocliente.component';

const routes: Routes = [
  {"path":"",component:NoticiasComponent},
  {"path":"noticias", component:NoticiasComponent},
  {"path":"DetalleNoticia/:id",component:DetalleNoticiaComponent},
  {"path":"DetalleNoticia",component:DetalleNoticiaComponent},
  {"path":"serviciocliente",component:ServicioclienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
