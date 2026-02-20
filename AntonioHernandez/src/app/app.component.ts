import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './elementos/menu/menu.component';
import { SelectorComponent } from './elementos/selector/selector.component';
import { AutoresService } from './autores/autores.service';
import { Autor } from './autores/autor';
import { GraficoCircularComponent } from './elementos/grafico-circular/grafico-circular.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, SelectorComponent, GraficoCircularComponent],
  template: `
  <div class="container mt-5">
    
    <app-selector
      label="Autores: "
      [options]="autores"
      (selectedValueChange)="onAutorChange($event)">
    </app-selector>
    
    <p class="mt-3">Autor seleccionado ID: {{selectedAutor}}</p>

    <hr>

    <h3>Distribución de Autores</h3>
    <app-grafico-circular [data]="datosPorEstado"></app-grafico-circular>

  </div>

  <br>

  <app-menu
    [title]="'Gestión Biblioteca'"
    [menuItems]="[
      {label: 'Inicio', link: '/', icono: 'bi bi-house'},
      {label: 'Libros por Autor', link: '/libros-por-autor', icono: 'bi bi-book'},
      {label: 'Autores por Premio', link: '/autores-por-premio', icono: 'bi bi-trophy'},
      {label: 'Insertar Autor', link: '/autor-insertar', icono: 'bi bi-person-plus'}
      
    ]">
  </app-menu>
  
  <div class="container mt-4 mb-5">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  encabezado: string = 'DATOS BIBLIOTECA';
  nombre: string = 'Biblioteca Central';
  ciudad: string = 'Zaragoza';
  selectedAutor: number = 0;

  // Variables para los componentes
  autores: { value: number; text: string }[] = [];
  datosPorEstado: { label: string, value: number }[] = []; 
  
  constructor(private autoresService: AutoresService) {}

  ngOnInit(): void {
    this.autoresService.getAutores().subscribe((data: Autor[]) => {
      
      // 1. Mapeo para el Selector
      this.autores = data.map((autor => ({
        value: autor.id!,
        text: autor.nom_autor ?? 'Desconocido'
      })));

      // 2. Lógica para el Gráfico Circular (Vivos vs Fallecidos)
      // Si tiene f_def consideramos que está fallecido, si no, está vivo.
      const fallecidos = data.filter(a => a.f_def).length;
      const vivos = data.filter(a => !a.f_def).length;

      this.datosPorEstado = [
        { label: 'Fallecidos', value: fallecidos },
        { label: 'Vivos', value: vivos }
      ];
    });
  }

  onAutorChange(opcionElegida: any): void {
    // Convertimos a número por si acaso el selector escupe un string
    this.selectedAutor = Number(opcionElegida);
  }
}