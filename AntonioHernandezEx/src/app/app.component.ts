import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './elementos/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  template: `
  <app-menu
    [title]="'Portal de Noticias'"
    [menuItems]="[
      {label: 'Inicio', link: '/', icono: 'fa fa-home'},
      {label: 'Noticias', link: '/noticias', icono: 'fa fa-newspaper'}
    ]">
  </app-menu>

  <div class="container mt-4">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'AntonioHernandezEx';

  ngOnInit(): void {}
}
