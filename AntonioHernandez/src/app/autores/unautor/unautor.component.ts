import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-unautor',
  imports: [CommonModule],
  templateUrl: './unautor.component.html',
  styleUrl: './unautor.component.css'
})
export class UnautorComponent {
  nombre: string = 'Miguel';
  apellido1: string = 'de Cervantes';
  apellido2: string = 'Saavedra';
  localidad: string = 'Alcalá de Henares';
  f_nac: string = '29/09/1547';
  visibles: boolean = true;

  alternarVisibilidad(): void {
    this.visibles = !this.visibles;
  }
}
