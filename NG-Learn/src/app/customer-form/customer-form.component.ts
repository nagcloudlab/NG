import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { myPattern } from '../custom-validators'
import { debounceTime } from 'rxjs/operators'

const messages = {
  required: 'must not empty',
  email: 'must be valid',
  minlength: 'must have min length chars'
}

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerForm: FormGroup;

  errorMessages = {}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.customerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [myPattern]],
      name: [''],
      mobile: [''],
      noti: 'email',
      nestedGroup: this.fb.group({
        field1: [''],
        field2: ['']
      })
    })

    const emailControl = this.customerForm.get('email')
    const passwordControl = this.customerForm.get('password')

    emailControl.valueChanges
      .pipe(debounceTime(3000))
      .subscribe(value => {
        // validate
        // talk to remote endpoint , get relevat feedback...
        if(value.length>3){
          console.log(value)
        }
      })

    emailControl.statusChanges
      .subscribe(status => {
        if (status === "INVALID") {
          const errors = emailControl.errors
          for (let errorType in errors) {
            this.errorMessages = { email: messages[errorType] }
          }
        } else {
          this.errorMessages = { email: '' }
        }
      })
  }

  loadCustomer(event) {
    // make request to load customer details from back-end
    let customer = {
      email: 'Nag@mail.com',
      // password: 'shhh',
      name: 'Nagabhushanam'
    }
    // this.customerForm.setValue(customer)
    this.customerForm.patchValue(customer)
  }

  handleSubmit(event) {
    if (this.customerForm.valid) {
      console.log(this.customerForm.value)
      //this.customerForm.reset();
    }
  }
  changeNoti(notiType) {
    let mobileControl = this.customerForm.get('mobile')
    if (notiType === 'sms') {
      mobileControl.setValidators([Validators.required])
    } else {
      mobileControl.clearValidators()
    }
    mobileControl.updateValueAndValidity()
  }


}
