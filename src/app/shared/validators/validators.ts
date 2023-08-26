import { FormControl } from "@angular/forms";




export const cantBeAdmin = (control: FormControl)=> {

    const value = control.value.trim().toLowerCase();

    if( value === 'admin' ){
        return {
            cantBeAdmin: true,
        }
    }

    return null;
}