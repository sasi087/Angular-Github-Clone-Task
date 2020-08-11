import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Users } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit {

  Users: Users[] = [];
  users_copy = [];
  user_name: '';

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.Users = [];
    //fetching users details from github users api
    this.http.get(`users`).subscribe(res => {
      console.log('res ', res);
      this.users_copy = res;
      this.Users = res;

    })
  }

  getUserName(newValue) {
    //searching users based on user name
    this.Users = this.users_copy.filter(user => user.login.includes(newValue));
  }

}
