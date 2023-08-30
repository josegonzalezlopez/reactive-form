import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';


@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator] ],
    userName: ['', [Validators.required, this.validatorService.cantBeAdmin]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordRepeat: ['', [Validators.required, Validators.minLength(6)]],

  });

  constructor(private formBuilder: FormBuilder,
              private validatorService: ValidatorsService,
              private emailValidator: EmailValidator){}

  public isValidField(field: string): boolean | null{
    return this.validatorService.isValidField(this.myForm, field);
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }

}
