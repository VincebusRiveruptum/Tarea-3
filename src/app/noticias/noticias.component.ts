import { Component, OnInit } from '@angular/core';
import { ListaNoticias } from '../interfaces/noticia';
import { Categoria, ListaCategorias} from '../interfaces/categoria'

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  ListaCategorias=ListaCategorias;
  ListaNoticias=ListaNoticias;
  constructor() { }

  ngOnInit(): void {
    
  }

}
