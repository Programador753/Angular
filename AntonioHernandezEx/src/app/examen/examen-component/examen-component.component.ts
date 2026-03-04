import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectorComponent } from '../../elementos/selector/selector.component';
import { CategoriasService } from '../../categorias/categorias.service';
import { PlatosService } from '../../platos/platos.service';
import { Categoria } from '../../categorias/categoria';
import { Plato } from '../../platos/plato';
import { PlatoIngredientes } from '../../plato-ingredientes/plato-ingredientes';
import { IngredientesService } from '../../Ingredientes/ingredientes.service';
import { Ingrediente } from '../../Ingredientes/ingrediente';
import { AreasService } from '../../areas/areas.service';
import { Area } from '../../areas/area';

@Component({
  selector: 'app-examen-component',
  imports: [CommonModule, SelectorComponent, FormsModule],
  templateUrl: './examen-component.component.html',
  styleUrl: './examen-component.component.css'
})
export class ExamenComponentComponent implements OnInit {
  preguntaActual: number = 1;

  // Pregunta 1
  categorias: { value: number; text: string }[] = [];
  platos: Plato[] = [];
  categoriaSeleccionada: string = '';

  // Pregunta 2
  platosOptions: { value: number; text: string }[] = [];
  platoSeleccionado: string = '';
  platoIngredientes: PlatoIngredientes[] = [];
  ingredientes: Ingrediente[] = [];

  // Pregunta 3
  categoriasOptions: { value: number; text: string }[] = [];
  areasOptions: { value: number; text: string }[] = [];
  ingredientesOptions: { value: number; text: string }[] = [];
  nuevoPlato = {
    name: '',
    idCategory: 0,
    idArea: 0,
    ingredientsSeleccionados: [] as number[]
  };
  constructor(
    private route: ActivatedRoute,
    private categoriasService: CategoriasService,
    private platosService: PlatosService,
    private ingredientesService: IngredientesService,
    private areasService: AreasService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.preguntaActual = data['pregunta'];

      switch (this.preguntaActual) {
        case 1:
          this.cargarCategorias();
          break;
        case 2:
          this.cargarPlatos();
          this.cargarIngredientes();
          break;
        case 3:
          this.cargarCategoriasParaFormulario();
          this.cargarAreas();
          this.cargarIngredientesParaFormulario();
          break;
      }

    });
  }

  cargarCategorias(): void {
    this.categoriasService.getCategorias().subscribe((data: Categoria[]) => {
      this.categorias = data.map(cat => ({
        value: cat.idCategory,
        text: cat.name
      }));
    });
  }

  onCategoriaChange(idCategoria: any): void {
    const id = Number(idCategoria);
    const cat = this.categorias.find(c => c.value === id);
    this.categoriaSeleccionada = cat ? cat.text : '';

    this.platosService.getPlatosPorCategoria(id).subscribe((data: Plato[]) => {
      this.platos = data;
    });
  }

  cargarPlatos(): void {
    this.platosService.getPlatos().subscribe((data: Plato[]) => {
      this.platosOptions = data.map(plato => ({
        value: plato.idMeal,
        text: plato.name
      }));
    });
  }

  cargarIngredientes(): void {
    this.ingredientesService.getIngredientes().subscribe((data: Ingrediente[]) => {
      this.ingredientes = data;
    });
  }

  getNombreIngrediente(idIngredient: number): string {
    const ingrediente = this.ingredientes.find(i => i.idIngredient === idIngredient);
    return ingrediente ? ingrediente.name : 'Ingrediente #' + idIngredient;
  }

  onPlatoChange(idPlato: any): void {
    const id = Number(idPlato);
    const plato = this.platosOptions.find(p => p.value === id);
    this.platoSeleccionado = plato ? plato.text : '';

    this.platosService.getPlatoById(id).subscribe((data: Plato) => {
      this.platoIngredientes = data.mealIngredients;
    });
  }

  // Pregunta 3 - Métodos del formulario
  cargarCategoriasParaFormulario(): void {
    this.categoriasService.getCategorias().subscribe((data: Categoria[]) => {
      this.categoriasOptions = data.map(cat => ({
        value: cat.idCategory,
        text: cat.name
      }));
    });
  }

  cargarAreas(): void {
    this.areasService.getAreas().subscribe((data: Area[]) => {
      this.areasOptions = data.map(area => ({
        value: area.idArea,
        text: area.name
      }));
    });
  }

  cargarIngredientesParaFormulario(): void {
    this.ingredientesService.getIngredientes().subscribe((data: Ingrediente[]) => {
      this.ingredientesOptions = data.map(ing => ({
        value: ing.idIngredient,
        text: ing.name
      }));
    });
  }

  onCategoriaFormChange(idCategoria: any): void {
    this.nuevoPlato.idCategory = Number(idCategoria);
  }

  onAreaChange(idArea: any): void {
    this.nuevoPlato.idArea = Number(idArea);
  }

  onIngredientesChange(selectedIds: number[]): void {
    this.nuevoPlato.ingredientsSeleccionados = selectedIds;
  }

  guardar(): void {
    if (!this.nuevoPlato.name || this.nuevoPlato.idCategory === 0 || this.nuevoPlato.idArea === 0) {
      alert('Por favor completa el nombre, la categoría y el área.');
      return;
    }

    const datosAEnviar = {
      name: this.nuevoPlato.name,
      idCategory: this.nuevoPlato.idCategory,
      idArea: this.nuevoPlato.idArea,
      instructions: '',
      thumbnailUrl: '',
      tags: '',
      youtubeUrl: '',
      ingredientsSeleccionados: this.nuevoPlato.ingredientsSeleccionados
    };

    this.platosService.insertarPlato(datosAEnviar).subscribe({
      next: () => {
        alert('¡Plato guardado correctamente!');
        this.nuevoPlato = { name: '', idCategory: 0, idArea: 0, ingredientsSeleccionados: [] };
      },
      error: (e) => alert('Error al guardar: ' + e.message)
    });
  }
}
