import { UserControlService } from './../../services/user-control.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss'],
})
export class UserControlComponent implements OnInit {

  userList: [User];

  constructor(private userControl: UserControlService) { }

  ngOnInit() {
    this.userControl.getAll().subscribe(res => {
      this.userList = res;
      console.log(res);
    });
  }

}
