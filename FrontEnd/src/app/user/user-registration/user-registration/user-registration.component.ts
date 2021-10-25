import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistrationForm : FormGroup;
  user : User;
  userSubmitted : boolean;
  constructor(private fb : FormBuilder , 
              private userService : UserServiceService,
              private alertify : AlertifyService) { }

  ngOnInit() {
    // this.userRegistrationForm = new FormGroup({
    //   userName : new FormControl(null , Validators.required),
    //   email : new FormControl(null,[Validators.required,Validators.email]),
    //   password : new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword : new FormControl(null,[Validators.required]),
    //   mobile : new FormControl (null,[Validators.required,Validators.maxLength(10)])
    // },this.passwordMatchingValidator);
    this.createUserRegistrationForm();
  }

  createUserRegistrationForm(){
    this.userRegistrationForm = this.fb.group({
      userName:[null,Validators.required],
      email : [null,[Validators.required,Validators.email]],
      password : [null,[Validators.required,Validators.minLength(8)]],
      confirmPassword : [null , [Validators.required]] , 
      mobile : [null,[Validators.required,Validators.maxLength(10)]]
    },{validators:this.passwordMatchingValidator});
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
    console.log(this.userRegistrationForm.value);
    this.userSubmitted = true;

    if(this.userRegistrationForm.valid){

    //this.user = Object.assign(this.user,this.userRegistrationForm.value);
    this.userService.addUsers(this.userData());
    this.userRegistrationForm.reset();
    this.userSubmitted = false;
    this.alertify.success('You are succesfully registered');
    } else{
      this.alertify.error('Please fill all the required fields');
    }
  }

  userData(): User{
    return this.user = {
      userName: this.userName.value,
      email :this.email.value,
      password : this.password.value,
      mobile : this.mobile.value
    }

  }

 

}
