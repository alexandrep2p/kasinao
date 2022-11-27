import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  
  loginFormControl = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    value: new FormControl('', [Validators.required, Validators.min(10)])
  }); ;

  get name() { return this.loginFormControl.get('name')};
  get value() { return this.loginFormControl.get('value')};

  onSubmit(){
    console.log(this.loginFormControl.valid)
  }
}
