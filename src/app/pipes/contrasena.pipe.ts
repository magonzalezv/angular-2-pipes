import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): any {
    let res = '';
    if (activar) {
      for (let i = 0; i < value.length; i++) {
        res += '*';
      }
      return res;
    } else {
      return value;
    }

  }

}
