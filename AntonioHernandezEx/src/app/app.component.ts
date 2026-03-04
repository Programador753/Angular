import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './elementos/menu/menu.component';
import { SelectorComponent } from './elementos/selector/selector.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  template: `
  <app-menu
    [title]="'Examen Antonio Hernández'"
    [menuItems]="[
      {label: 'Inicio', link: '/', icono: 'bi bi-house'},
      {label: 'Pregunta 1', link: '/pregunta1', icono: 'bi bi-1-circle'},
      {label: 'Pregunta 2', link: '/pregunta2', icono: 'bi bi-2-circle'},
      {label: 'Pregunta 3', link: '/pregunta3', icono: 'bi bi-3-circle'}
    ]">
  </app-menu>

  <div class="container mt-4 mb-5">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AntonioHernandezEx';

  ngOnInit(): void {}
}
