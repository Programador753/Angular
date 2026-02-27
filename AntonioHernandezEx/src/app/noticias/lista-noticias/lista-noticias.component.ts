import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasService } from '../../services/noticias.service';
import { Noticia, Categoria } from '../../models/noticia';
import { TarjetaNoticiaComponent } from '../tarjeta-noticia/tarjeta-noticia.component';
import { SelectorComponent } from '../../elementos/selector/selector.component';

@Component({
  selector: 'app-lista-noticias',
  standalone: true,
  imports: [CommonModule, TarjetaNoticiaComponent, SelectorComponent],
  templateUrl: './lista-noticias.component.html',
  styleUrl: './lista-noticias.component.css'
})
export class ListaNoticiasComponent implements OnInit {

  todasLasNoticias: Noticia[] = [];
  noticiasFiltradas: Noticia[] = [];
  categorias: { value: number; text: string }[] = [];
  categoriaSeleccionada: number = 0;
  cargando = true;
  error = '';

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    // Cargar categorías para el selector
    this.noticiasService.getCategorias().subscribe({
      next: (cats: Categoria[]) => {
        this.categorias = [
          { value: 0, text: 'Todas las categorías' },
          ...cats.map(c => ({ value: c.id, text: c.nombre }))
        ];
      },
      error: (err) => console.error('Error cargando categorías', err)
    });

    // Cargar todas las noticias
    this.noticiasService.getNoticias().subscribe({
      next: (data: Noticia[]) => {
        this.todasLasNoticias = data;
        this.noticiasFiltradas = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las noticias. Comprueba que la API está en ejecución.';
        this.cargando = false;
        console.error(err);
      }
    });
  }

  onCategoriaChange(categoriaId: number): void {
    this.categoriaSeleccionada = Number(categoriaId);
    if (this.categoriaSeleccionada === 0) {
      this.noticiasFiltradas = this.todasLasNoticias;
    } else {
      this.noticiasFiltradas = this.todasLasNoticias.filter(n =>
        n.noticiaCategorias?.some(nc => nc.categoriaId === this.categoriaSeleccionada)
      );
    }
  }
}
