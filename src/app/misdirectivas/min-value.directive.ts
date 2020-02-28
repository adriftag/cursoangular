import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appMinValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinValueDirective, multi:true}]
})
export class MinValueDirective implements Validator {
  @Input('appMinValue') minValue: number;

  constructor() { }

  validate(formControl: FormControl) : ValidationErrors { //asi no tengo que buscar en el formulario
    if (!this.minValue && this.minValue != 0 || isNaN(this.minValue)) {
      return null;
    }
    else {
      return this.isMinValue(this.minValue)(formControl);
    }
  }

  isMinValue(minValue : number) {
    return (formControl : FormControl) => {
      const valorControl = formControl.value;

      if(!valorControl && valorControl != 0 || isNaN(valorControl)) return null;

      return valorControl >= minValue ? { minValue:true } : null;
    }
  }

}
