import { RegisterServiceService } from './../../services/register-service.service';
import { Register } from './../../models/register-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  register = new Register();

  constructor(private registerService: RegisterServiceService) { }

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
