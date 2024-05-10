import { Directive, forwardRef } from '@angular/core';
import { CustomvalidationService } from '../customvalidation.service';
import { AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appValidateUserName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ValidateUserNameDirective),
      multi: true,
    },
  ],
})
export class ValidateUserNameDirective {

constructor(private customValidator: CustomvalidationService) {}

  validate(
    control: AbstractControl
  ): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    return this.customValidator.userNameValidator(control);
  }

}
