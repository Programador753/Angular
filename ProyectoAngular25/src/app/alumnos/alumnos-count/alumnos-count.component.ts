import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumnos-count',
  imports: [CommonModule, FormsModule],
  templateUrl: './alumnos-count.component.html',
  styleUrl: './alumnos-count.component.css'
})
export class AlumnosCountComponent {
  opcionElegida: string = 'todos'; // Valor por defecto

  @Output() globalElegido: EventEmitter<string> = new EventEmitter<string>();

  @Input() todos: number = 0; // Recibimos el total de alumnos desde el componente padre
  @Input() hombres: number = 0; // Recibimos el total de hombres desde el componente padre
  @Input() mujeres: number = 0; // Recibimos el total de mujeres desde el componente padre

  cuandoCambiaOpcion() {
    this.globalElegido.emit(this.opcionElegida);
  }
}
