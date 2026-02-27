import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [CommonModule],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input() iconClasses: string = '';
  @Input() buttonClasses: string = '';
}
