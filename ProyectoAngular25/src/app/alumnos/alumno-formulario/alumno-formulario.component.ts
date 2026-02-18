import { Component, OnInit } from '@angular/core';
import { Alumno } from '../Alumno';
import { AlumnosService } from '../alumnos.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumno-formulario',
  imports: [FormsModule],
  templateUrl: './alumno-formulario.component.html',
  styleUrl: './alumno-formulario.component.css',
})
export class AlumnoFormularioComponent implements OnInit {
  alumno: Alumno = new Alumno(0, '', '', '', 1, '', '', '');
  editar: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alumnoService: AlumnosService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.editar = true;
        this.alumnoService.getAlumnoById(id).subscribe(data => {
          this.alumno = data;
        });
      }
    });
  }

  onSubmit() {
    this.alumnoService.addAlumno(this.alumno).subscribe(
      response => {
        this.router.navigate(['/alumno-lista']);
      }
    );
    
  }
}
