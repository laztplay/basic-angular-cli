import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UsersService } from '../services/users.service'
import { IUser, IHTTPResult } from '../shared'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<IUser>  

  constructor(public userService: UsersService, public router: Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.all()
      .then((res: IHTTPResult) => {
        if (res.ok) {
          this.users = <Array<IUser>>res.rows;
        } else {
          alert(JSON.stringify(res.err));
        };
      });
  }

  edit(user: IUser) {
    this.router.navigate(['/', user.id])
  }

  remove(user: IUser) {
    if (confirm('Are you sure?')) {
      this.userService.remove(user.id)
        .then((res: IHTTPResult) => {
          if (res.ok) {
            this.getUsers();
          } else {
            alert(JSON.stringify(res.err));
          }
        });
    }
  }

}
