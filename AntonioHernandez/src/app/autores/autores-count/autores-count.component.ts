import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autores-count',
  imports: [CommonModule, FormsModule],
  templateUrl: './autores-count.component.html',
  styleUrl: './autores-count.component.css'
})
export class AutoresCountComponent {
  opcionElegida: string = 'todos';

  @Output() globalElegido: EventEmitter<string> = new EventEmitter<string>();

  @Input() todos: number = 0;
  @Input() vivos: number = 0;
  @Input() fallecidos: number = 0;

  cuandoCambiaOpcion() {
    this.globalElegido.emit(this.opcionElegida);
  }
}
