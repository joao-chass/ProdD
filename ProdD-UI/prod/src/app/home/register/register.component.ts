import { Register } from './../../models/register-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  register = new Register();

  constructor() { }

  ngOnInit() {}

}
