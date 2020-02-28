import { Directive, Input } from '@angular/core';
import { Validator, ValidationErrors, NG_VALIDATORS, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appMustMatch]',
  providers: [{provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi:true}]
})
export class MustMatchDirective implements Validator {
  @Input('appMustMatch') values: string[] = []; //recibe datos de si mismo, un array

  constructor() { }

  validate(formGroup: FormGroup) : ValidationErrors {
    if (this.values.length <= 1) {
      return null;
    }
    else {
      return this.mustMatch(this.values)(formGroup); //esto es una funcion que retorna otra funcion
    }
  }

  mustMatch(nombresControles) {
    return (formGroup : FormGroup) => {
      const primero = nombresControles[0];
      const segundo = nombresControles[1];

      const control = formGroup.controls[primero];
      const matchingControl = formGroup.controls[segundo];

      if(!control || !matchingControl) return null;

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch:true});
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
