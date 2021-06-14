import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactiveform';
  constructor (private fb:FormBuilder){}
  registerform=this.fb.group({
    email:['',[Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.required]],
    password:['',[Validators.minLength(6),Validators.required]]
  })
}
