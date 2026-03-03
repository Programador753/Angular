import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AutorTituloPipe } from '../autor-titulo.pipe';
import { AutoresCountComponent } from '../autores-count/autores-count.component';
import { Autor } from '../autor';
import { AutoresService } from '../autores.service';
import { BotonComponent } from '../../elementos/boton/boton.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autores-listado',
  imports: [CommonModule, AutorTituloPipe, AutoresCountComponent, BotonComponent, RouterLink],
  templateUrl: './autores-listado.component.html',
  styleUrl: './autores-listado.component.css',
  providers: [AutoresService]
})
export class AutoresListadoComponent implements OnInit {
  opcionSeleccionada: string = 'todos';
  autores: Autor[] = [];

  constructor(private losAutores: AutoresService) {}

  ngOnInit(): void {
    this.losAutores.getAutores().subscribe((data: Autor[]) => {
      this.autores = data;
    });
  }

  alCambiarOpcion(opcion: string): void {
    this.opcionSeleccionada = opcion;
  }

  getTodos(): number {
    return this.autores.length;
  }

  getVivos(): number {
    return this.autores.filter(a => !a.f_def).length;
  }

  getFallecidos(): number {
    return this.autores.filter(a => !!a.f_def).length;
  }

  esFallecido(autor: Autor): boolean {
    return !!autor.f_def;
  }

  eliminarAutor(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este autor?')) {
      this.losAutores.deleteAutor(id).subscribe(() => {
        this.autores = this.autores.filter(a => a.id !== id);
      });
    }
  }
}
