import { Pipe, PipeTransform } from '@angular/core';
import { Registro } from '../interfaces/registro.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(registro: Registro[], ordenarPor: string = 'sin valor'): Registro[] {
    switch (ordenarPor) {
        case 'nombre':
            return registro.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
        case 'documento':
            return registro.sort((a, b) => (a.documento > b.documento) ? -1 : 1);
        default:
            return registro;
    }
}

}
