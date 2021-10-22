import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistrationForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.userRegistrationForm = new FormGroup({

      userName : new FormControl(null , Validators.required),
      email : new FormControl(null,[Validators.required,Validators.email]),
      password : new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmPassword : new FormControl(null,[Validators.required]),
      mobile : new FormControl (null,[Validators.required,Validators.maxLength(10)])
    },this.passwordMatchingValidator);
  }

  passwordMatchingValidator(fg : FormGroup) : Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notmatched:true}
  }

  // Form control getter methods
  //************************ */
  get userName(){
    return this.userRegistrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.userRegistrationForm.get('email') as FormControl;
  }

  get password(){
    return this.userRegistrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.userRegistrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.userRegistrationForm.get('mobile') as FormControl;
  }


  onSubmit(){
    console.log(this.userRegistrationForm);
  }

}
