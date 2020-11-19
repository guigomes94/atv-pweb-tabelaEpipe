import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneMask'
})
export class TelefoneMaskPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 11) {
      value="0" + value
      value=value.replace(/^(\d{3})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
      value=value.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    }
    if (value.length === 10) {
      value=value.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
      value=value.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    } else if (value.length >= 8) {
      value=value.replace(/(\d)(\d{4})$/,"$1-$2");
    }
    return value;
  }

}
