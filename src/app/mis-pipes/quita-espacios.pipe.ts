import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quitaEspacios'
})
export class QuitaEspaciosPipe implements PipeTransform {

  transform(value: string, args?: number): string {
    let re = '/g'; 
    let newstr = value.replace(re, ""); 
    return newstr;
  }

}
