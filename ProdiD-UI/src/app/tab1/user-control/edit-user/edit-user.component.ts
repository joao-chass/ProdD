import { UserControlService } from 'src/app/services/user-control.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {

   userEdit: User = new User();

  constructor(
    public rout: Router,
    private route: ActivatedRoute,
    private userControl: UserControlService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
     const id =  params.get('id');
     this.getUser(id);
    });
  }

  getUser(id){
    this.userControl.getUser(id).subscribe(res => {
      this.userEdit = res;
    });
  }

  editUse() {
    this.userControl.editUser(this.userEdit._id, this.userEdit).subscribe(res => {
      console.log(res);
    });
  }

  register() {
    this.rout.navigateByUrl('/user-control');
  }
}
