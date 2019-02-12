import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
        const password = control.get('password').value;

        const repeatpassword = control.get('repeatpassword').value;

        if (password !== repeatpassword) {
            control.get('repeatpassword').setErrors({ ConfirmPassword: true });
        } else {
            return null;
        }
    }
}
