import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router'

import { IUser, IHTTPResult, IGroup } from '../shared';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public groups: Array<IGroup>;
  public user: IUser;
  public id: number;

  constructor(private userService: UsersService, public router: Router, public route: ActivatedRoute) { 
    this.user = { id: null, name: null, username: null, email: null, group_id: null };
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.userService.getGroups()
      .then((res: IHTTPResult) => {
        if (res.ok) {
          this.groups = <Array<IGroup>>res.rows;
        } else {
          alert(JSON.stringify(res.err));
        };
      });
    
    if (this.id) {
      this.userService.detail(this.id)
        .then((res: IHTTPResult) => {
          if (res.ok) {
            this.user = res.user;
          } else {
            alert(JSON.stringify(res.err));
          }
        });
    }
  }

  save() {
    if (this.id) {
      this.userService.update(this.user)
        .then((res: IHTTPResult) => {
          if (res.ok) {
            this.router.navigateByUrl('/');
          } else {
            alert(JSON.stringify(res.err));
          }
        });
    } else {
      this.userService.save(this.user)
        .then((res: IHTTPResult) => {
          if (res.ok) {
            this.router.navigateByUrl('/');
          } else {
            alert(JSON.stringify(res.err));
          }
        });
    }
    
  }

}
