import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';

import { IUser } from '../shared'

@Injectable()
export class UsersService {

  constructor(@Inject('API_URL') public url, public http: Http) { }

  all() {
    let url = `${this.url}/users`

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });

      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }

  getGroups() {
    let url = `${this.url}/groups`

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });

      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }

  save(user: IUser) {
    let url = `${this.url}/users`

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });
      let body = { username: user.username, name: user.name, email: user.email, group_id: user.group_id };

      this.http.post(url, body, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }

  update(user: IUser) {
    let url = `${this.url}/users`

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });
      let body = { id: user.id, username: user.username, name: user.name, email: user.email, group_id: user.group_id };

      this.http.put(url, body, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }

  detail(id: number) {
    let url = `${this.url}/users/${id}`

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });
 
      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }

  remove(id: string) {
    let url = `${this.url}/users/${id}`

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });
 
      this.http.delete(url, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }

}
