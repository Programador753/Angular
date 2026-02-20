import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoresService } from '../../autores/autores.service';
import { LibrosService } from '../libros.service';
import { SelectorComponent } from '../../elementos/selector/selector.component';
import { Libro } from '../libro';

@Component({
  selector: 'app-librosdelautor',
  standalone: true,
  imports: [CommonModule, SelectorComponent],
  templateUrl: './librosdelautor.component.html',
  styleUrl: './librosdelautor.component.css'
})
export class LibrosdelautorComponent implements OnInit {
  opcionesAutores: { value: any; text: string }[] = [];
  libros: Libro[] = [];
  cargando: boolean = false;

  constructor(
    private autoresService: AutoresService,
    private librosService: LibrosService
  ) {}

  ngOnInit(): void {
  // Cargamos los autores para el selector
  this.autoresService.getAutores().subscribe(autores => {
    this.opcionesAutores = autores.map(a => ({
      value: a.id,
      // Usamos el nombre real de tu modelo: 'nom_autor'
      // Usamos '??' para asegurar que siempre sea un string y evitar el error de undefined
      text: a.nom_autor ?? 'Autor desconocido'
    }));
  });
}

  onAutorSeleccionado(autorId: any): void {
    // Convertimos a número para asegurar compatibilidad con la API
    const id = Number(autorId);
    
    if (id && id > 0) {
      this.cargando = true;
      this.librosService.getLibrosPorAutor(id).subscribe({
        next: (data) => {
          this.libros = data;
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error al cargar libros:', err);
          this.libros = [];
          this.cargando = false;
        }
      });
    } else {
      this.libros = [];
    }
  }
}