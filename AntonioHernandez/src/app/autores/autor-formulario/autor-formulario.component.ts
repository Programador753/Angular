import { Component, OnInit } from '@angular/core';
import { Autor } from '../autor';
import { AutoresService } from '../autores.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// Importamos los componentes de la carpeta elementos y el servicio de países
import { SelectorComponent } from '../../elementos/selector/selector.component';
import { BotonComponent } from '../../elementos/boton/boton.component';
import { PaisesService } from '../../paises/paises.service';
import { Pais } from '../../paises/pais';

@Component({
  selector: 'app-autor-formulario',
  // Asegúrate de añadir los componentes importados en el array 'imports'
  imports: [FormsModule, SelectorComponent, BotonComponent], 
  templateUrl: './autor-formulario.component.html',
  styleUrl: './autor-formulario.component.css',
})
export class AutorFormularioComponent implements OnInit {
  autor: Autor = new Autor(); 
  editar: boolean = false;
  
  // Array formateado para tu componente app-selector
  paisesOptions: { value: any; text: string }[] = []; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private autorService: AutoresService,
    private paisesService: PaisesService // Inyectamos el servicio de países
  ) {}

  ngOnInit(): void {
    this.cargarPaises(); // Cargamos los países al inicializar

    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.editar = true;
        this.autorService.getAutorById(id).subscribe(data => {
          this.autor = data;
        });
      }
    });
  }

  // Método para cargar los países y adaptarlos al formato del selector
  cargarPaises(): void {
    // Añadimos explícitamente el tipo Pais[] a la variable paises
    this.paisesService.getPaises().subscribe((paises: Pais[]) => { 
      this.paisesOptions = paises.map(pais => ({
        value: pais.id,
        text: pais.nom_pais || 'Desconocido'
      }));
    });
  }

  onSubmit() {
    // 1. Aseguramos que el país se envíe como número
    this.autor.paisId = Number(this.autor.paisId);

    // 2. Comprobamos si estamos editando o insertando
    if (this.editar) {
      this.autorService.updateAutor(this.autor.id!, this.autor).subscribe(() => {
        alert('¡Autor actualizado correctamente!');
        this.router.navigate(['/autores-lista']); // Al editar sí suele ser mejor volver a la lista
      });
    } else {
      this.autor.id = 0; 
      this.autorService.createAutor(this.autor).subscribe(() => {
        
        // 1. Mostramos el mensaje de éxito
        alert('¡Autor insertado correctamente!'); 
        
        // 2. Reiniciamos el formulario limpiando el objeto
        this.autor = new Autor(); 

        // NOTA: Hemos quitado el this.router.navigate para que NO te cambie de página 
        // y puedas insertar otro autor inmediatamente.
      });
    }
  }
}