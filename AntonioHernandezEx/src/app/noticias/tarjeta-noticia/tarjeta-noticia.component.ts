import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-tarjeta-noticia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta-noticia.component.html',
  styleUrl: './tarjeta-noticia.component.css'
})
export class TarjetaNoticiaComponent {

  @Input() noticia!: Noticia;

  get imagenPortada(): string {
    if (!this.noticia?.imagenNoticias || this.noticia.imagenNoticias.length === 0) {
      return 'https://placehold.co/400x200?text=Sin+imagen';
    }
    const portada = this.noticia.imagenNoticias.find(i => i.tipo === 'portada')
      ?? this.noticia.imagenNoticias[0];
    return portada.urlImagen ?? 'https://placehold.co/400x200?text=Sin+imagen';
  }

  get categorias(): string {
    if (!this.noticia?.imagenNoticias) return '';
    return '';
  }
}
