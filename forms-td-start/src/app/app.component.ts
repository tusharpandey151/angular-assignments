import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm:NgForm; 
  defaultQuestion = 'teacher';
  answer:string="";
  genders=['male','female','others'];
  selectedGender = 'male';
  user = {
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender: ''
  };
  formSubmitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
       userData: {
          username: suggestedName 
        } 
      });
  }

  onSubmit() {
    this.formSubmitted =true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();//a js object can also be passed .. which will set default value to the passed object values
  }
}
