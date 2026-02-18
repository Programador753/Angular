import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './elementos/menu/menu.component'; // Importamos tu menú

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  template: `
  <app-menu
    [title]="'Biblioteca Antonio Hernández'"
    [menuItems]="[
      {label: 'Inicio', link: '/', icono: 'fa fa-home'},
      {label: 'Añadir Autor', link: '/autor-insertar', icono: 'fa fa-pen'}
    ]">
  </app-menu>
  
  <div class="container mt-4">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AntonioHernandez';
}