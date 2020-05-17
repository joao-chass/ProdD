import { Register } from './../../models/register-model';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {

  register = new Register();

  constructor(private registerService: RegisterService) { }

  ngOnInit() {}

  registerFinish() {
    this.registerService.registeUser(this.register).subscribe(res => {
      console.log(res);
    },
    error => {
      console.error(error);
    })
  }



}
