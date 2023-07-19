import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const initialProduct = {
  name: 'Cafetera express con molinillo',
  price: 23500,
  inStorage: 9,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit{

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.myForm.reset( initialProduct );
  }

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(0) ]],
    inStorage: [0, [ Validators.required, Validators.min(0) ]],
  });

  onSave(): void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    } 
    console.log(this.myForm.value);
    this.myForm.reset( { price: 0, inStorage: 0 });
  }
}
