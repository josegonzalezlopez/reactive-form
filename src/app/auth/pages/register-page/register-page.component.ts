import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeAdmin } from 'src/app/shared/validators/validators';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    userName: ['', [Validators.required, cantBeAdmin]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordRepeat: ['', [Validators.required, Validators.minLength(6)]],

  });

  constructor(private formBuilder: FormBuilder){}

  public isValidField(field: string): boolean{
    //TODO: Obtener datos de validacion
    return true;
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
    
  }

}
