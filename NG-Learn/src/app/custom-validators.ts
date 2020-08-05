

import { AbstractControl } from '@angular/forms'


export function myPattern(control: AbstractControl) {
    let value = control.value;
    let pattern = /[A-Z][a-z][0-9]/
    if (pattern.test(value))
        return null
    else return { password: true }
}