import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarePipe'
})
export class SquarePipePipe implements PipeTransform {

  transform(value: number, exponent?: number): number {
    return Math.pow(value, 2);
  }

}
