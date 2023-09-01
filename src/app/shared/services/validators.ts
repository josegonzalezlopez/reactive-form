import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorsService {

    public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
    
    public cantBeAdmin = (control: FormControl)=> {
    
        const value = control.value.trim().toLowerCase();
    
        if( value === 'admin' ){
            return {
                cantBeAdmin: true,
            }
        }
    
        return null;
    }

    public isValidField(form: FormGroup, field: string): boolean|null{
        return form.controls[field].errors && form.controls[field].touched;
    }

    public compareInput (field1: string, field2: string){
        return (form: AbstractControl): ValidationErrors | null => {
            
            const _field1 = form.get(field1)?.value;
            const _field2 = form.get(field2)?.value;
            
            if(_field1 !== _field2){
                form.get('field2')?.setErrors({passIcorrect: true});
                return {passIcorrect: true};
            }
            form.get('field2')?.setErrors(null);
            return null;
        }
    }
}