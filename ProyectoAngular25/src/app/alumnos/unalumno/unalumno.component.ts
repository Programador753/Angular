import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-unalumno',
  imports: [CommonModule],
  templateUrl: './unalumno.component.html',
  styleUrl: './unalumno.component.css'
})
export class UnalumnoComponent {
  nombre: string = 'Perico';
  apellidos: string = 'Delgado';
  direccion: string = 'Segovia Capital';
  edad: number = 60;
  columnas: number = 2;
  visibles: boolean = true;

  alternarVisibilidad(): void {
    this.visibles = !this.visibles;
  }
}
