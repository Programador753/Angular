import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autorTitulo'
})
export class AutorTituloPipe implements PipeTransform {

  transform(value: string, fallecido: boolean): string {
    if (fallecido) {
      return '' + value;
    } else {
      return value;
    }
  }

}
