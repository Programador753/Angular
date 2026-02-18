import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grafico-circular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico-circular.component.html',
  styleUrls: ['./grafico-circular.component.css']
})
export class GraficoCircularComponent implements OnChanges {

  @Input() data: { label: string, value: number }[] = [];

  slices: any[] = [];
  total: number = 0;
  
  // Colores predefinidos
  colors = ['#3498db', '#e91e63', '#9b59b6', '#f1c40f', '#2ecc71', '#e67e22'];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.calculateSlices();
    }
  }

  calculateSlices() {
    this.total = this.data.reduce((acc, item) => acc + item.value, 0);
    
    // Si no hay datos, limpiamos
    if (this.total === 0) {
      this.slices = [];
      return;
    }

    let cumulativePercent = 0;

    this.slices = this.data.map((item, index) => {
      const percent = item.value / this.total;
      
      // Caso especial: Si es el 100%, dibujamos un círculo completo
      if (percent === 1) {
        return {
          isCircle: true,
          color: this.colors[index % this.colors.length],
          label: item.label,
          value: item.value,
          percent: '100%'
        };
      }

      // Matemáticas del arco
      const [startX, startY] = this.getCoordinatesForPercent(cumulativePercent);
      cumulativePercent += percent;
      const [endX, endY] = this.getCoordinatesForPercent(cumulativePercent);

      const largeArcFlag = percent > 0.5 ? 1 : 0;

      // M 0 0 -> Mover al centro
      // L ... -> Línea al inicio del arco
      // A ... -> Dibujar el arco
      // L 0 0 -> Volver al centro (Cerrar el trozo)
      const pathData = [
        `M 0 0`, 
        `L ${startX} ${startY}`, 
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, 
        `L 0 0`
      ].join(' ');

      return {
        isCircle: false,
        path: pathData,
        color: this.colors[index % this.colors.length],
        label: item.label,
        value: item.value,
        percent: Math.round(percent * 100) + '%'
      };
    });
  }

  // Convierte porcentaje (0 a 1) en coordenadas X, Y
  getCoordinatesForPercent(percent: number) {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  }
}