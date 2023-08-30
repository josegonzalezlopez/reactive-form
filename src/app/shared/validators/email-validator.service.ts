import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator {

    validate(control: AbstractControl):  Observable<ValidationErrors | null> {
        const email = control.value;
       
        return new Observable<ValidationErrors | null>((subscriber) =>{
            console.log(email);
            if(email === 'admin@gmail.com'){
                subscriber.next({emailTaken: { messagge: 'Email ya esta en uso'}});
                subscriber.complete();
            }

            subscriber.next(null);
            subscriber.complete();
            
        }).pipe(
            delay(3000)
        );
        
    }

    // validate(control: AbstractControl):  Observable<ValidationErrors | null> {
    //     const email = control.value;
    //     console.log(email);
    //     return of({
    //         emailAlgo: true,
    //     }).pipe(
    //         delay(3000)
    //     )
    // }


}