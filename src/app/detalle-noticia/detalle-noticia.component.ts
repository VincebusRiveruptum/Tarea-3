import { Component, OnInit } from '@angular/core';
import { ListaNoticias, Noticia } from '../interfaces/noticia';
import { ActivatedRoute, Route} from '@angular/router';
import { ListaCategorias } from '../interfaces/categoria';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {
  ListaNoticias=ListaNoticias;
  id:number=0;    
  Noticia:any;
  Categoria:any;
  
  constructor(private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(datos=>{
      console.log(datos);
      this.id = datos["id"];
    });
  }
  ngOnInit(): void {
    this.Noticia = ListaNoticias.find(objeto=>objeto.id==this.id);
    this.Categoria = ListaCategorias.find(objeto=>objeto.id==this.Noticia.idcat);
    console.log(this.Categoria);
  }
}
