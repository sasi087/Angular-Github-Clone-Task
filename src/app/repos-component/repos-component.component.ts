import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Repos } from '../models/repo.model';

@Component({
  selector: 'app-repos-component',
  templateUrl: './repos-component.component.html',
  styleUrls: ['./repos-component.component.css']
})
export class ReposComponentComponent implements OnInit {

  user_name;
  repo_name = '';
  Repos: Repos[] = [];
  repos_copy = [];


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.Repos = [];
    //getting user name from param
    this.user_name = this.activatedRoute.snapshot.params.user_name;
    // fetching repos based on user
    this.http.get(`users/${this.user_name}/repos`).subscribe(res => {
      this.repos_copy = res;
      this.Repos = res;
    })
  }

  getRepoName(newValue){
    //searching repo based on repo name
    this.Repos = this.repos_copy.filter(repo => repo.name.includes(newValue));
  }

}
