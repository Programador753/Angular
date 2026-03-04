import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingrediente } from './ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {
  private apiUrl = 'https://localhost:7109/api/Ingredients';

  constructor(private readonly http: HttpClient) {}

  getIngredientes(): Observable<Ingrediente[]> {
    return this.http.get<Ingrediente[]>(this.apiUrl);
  }
}
