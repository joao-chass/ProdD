import { Router } from '@angular/router';
import { User } from 'src/app/models/user-model';
import { Component, OnInit } from '@angular/core';
import { UserControlService } from 'src/app/services/user-control.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss'],
})
export class UserControlComponent implements OnInit {
  userList: [User];

  constructor(
    private userControl: UserControlService,
    public rout: Router) { }

  ngOnInit() {
    this.userControl.getAll().subscribe(res => {
      this.userList = res;
      console.log(res);
    });
  }

  editUser(id) {
    this.rout.navigateByUrl(`/edit-user/${id}`);
  }

  adduser() {
    this.rout.navigateByUrl('/register')
  }
}
