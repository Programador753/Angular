import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from '../../elementos/selector/selector.component';
// IMPORTANTE: Ajusta las rutas de tus servicios y modelos según donde los tengas
import { AutoresService } from '../autores.service'; 
import { Autor } from '../autor';
import { PremiosService } from '../../premios/premios.service';

// Definimos la interfaz del DTO que hicimos en .NET
export interface AutorConAnio {
  anio: number;
  autor: Autor;
}

@Component({
  selector: 'app-autoresporpremio',
  standalone: true, // Si usas standalone components
  imports: [CommonModule, SelectorComponent],
  templateUrl: './autoresporpremio.component.html',
  styleUrl: './autoresporpremio.component.css'
})
export class AutoresporpremioComponent implements OnInit {
  // Opciones para el selector de premios
  opcionesPremios: { value: any; text: string }[] = [];
  
  // Lista donde guardaremos el resultado de la API
  autoresPremiados: AutorConAnio[] = [];
  cargando: boolean = false;

  constructor(
    private autoresService: AutoresService, // O el servicio donde tengas tus peticiones HTTP
    private premiosService: PremiosService // Añadimos el servicio de premios
  ) {}

  ngOnInit(): void {
    // 1. Cargar la lista de premios para llenar el selector
    this.premiosService.getPremiosTipoAutor().subscribe(premios => {
      this.opcionesPremios = premios.map(p => ({
        // Usamos ! para decirle a TypeScript que estamos seguros de que id existe
        value: p.id!, 
        // Usamos ?? por si algún premio no tiene nombre en la BD, que no dé error
        text: p.nom_premio ?? 'Premio sin nombre' 
      }));
    });
  }

  onPremioSeleccionado(premioId: any): void {
    const id = Number(premioId);
    
    if (id && id > 0) {
      this.cargando = true;
      // 2. Llamar al nuevo endpoint de la API de .NET
      this.autoresService.getAutoresPorPremio(id).subscribe({
        next: (data: AutorConAnio[]) => {
          this.autoresPremiados = data;
          this.cargando = false;
        },
        error: (err) => {
          console.error('Error al cargar autores:', err);
          this.autoresPremiados = [];
          this.cargando = false;
        }
      });
    } else {
      this.autoresPremiados = [];
    }
  }
}