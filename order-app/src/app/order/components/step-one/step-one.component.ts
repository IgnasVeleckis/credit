import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {
  @Output() formValue = new EventEmitter<string>()
  constructor() { }
  firstName: string;
  lastName: string;
  phoneSelectOptions = [
    '+440',
    '+123',
    '+321',
    '+000'
  ]


/*   firstForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    house: new FormControl('', Validators.required),
    flat: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required)
  }) */
  firstForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    house: new FormControl(''),
    flat: new FormControl(''),
    zip: new FormControl('')
  })
  
  changeValue() {
    this.formValue.emit('2')  
    this.gettingFormValues()
  }

  firstFormSubmit() {
    console.log(this.firstForm.value);
    this.changeValue()
  }

  gettingFormValues(){
    this.firstName = this.firstForm.get('firstName').value
    this.lastName = this.firstForm.get('lastName').value
  }

}