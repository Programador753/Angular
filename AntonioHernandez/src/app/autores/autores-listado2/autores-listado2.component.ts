import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Autor } from '../autor';
import { AutoresService } from '../autores.service';
import { PaisesService } from '../../paises/paises.service';
import { Pais } from '../../paises/pais';
import { BotonComponent } from '../../elementos/boton/boton.component';
import { AutorTituloPipe } from '../autor-titulo.pipe';
import { SelectorComponent } from '../../elementos/selector/selector.component';

@Component({
  selector: 'app-autores-listado2',
  imports: [CommonModule, RouterLink, BotonComponent, AutorTituloPipe, SelectorComponent],
  templateUrl: './autores-listado2.component.html',
  styleUrl: './autores-listado2.component.css'
})
export class AutoresListado2Component implements OnInit {
  autores: Autor[] = [];
  paises: Pais[] = [];

  opcionesSelector: { value: any; text: string }[] = [];
  opcionSeleccionada: any = 'todos';

  constructor(private losAutores: AutoresService, private losPaises: PaisesService) {}

  ngOnInit(): void {
    this.losAutores.getAutores().subscribe(data => (this.autores = data));

    this.losPaises.getPaises().subscribe((data: Pais[]) => {
      this.paises = data;
      this.opcionesSelector = [
        { value: 'todos', text: 'Todos' },
        ...this.paises.map(p => ({ value: p.id, text: p.nom_pais }))
      ];
    });
  }

  onFiltroChange(valor: any): void {
    this.opcionSeleccionada = valor;

    if (valor === 'todos') {
      this.losAutores.getAutores().subscribe(data => (this.autores = data));
    } else {
      this.losAutores.getAutoresByPais(Number(valor)).subscribe({
        next: data => (this.autores = data),
        error: () => {
          // Si la API no soporta filtrar por país, filtramos en cliente
          this.losAutores.getAutores().subscribe(data => {
            this.autores = data.filter(a => a.paisId === Number(valor));
          });
        }
      });
    }
  }

  getNombrePais(paisId: number): string {
    const pais = this.paises.find(p => p.id === paisId);
    return pais ? pais.nom_pais : '';
  }

  esFallecido(autor: Autor): boolean {
    return !!autor.f_def;
  }

  eliminarAutor(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este autor?')) {
      this.losAutores.deleteAutor(id).subscribe(() => {
        this.autores = this.autores.filter(a => a.id !== id);
      });
    }
  }
}
