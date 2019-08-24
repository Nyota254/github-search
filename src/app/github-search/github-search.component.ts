import { Component, OnInit } from '@angular/core';
import { GithubHttpService } from '../github-http.service';
import { Users } from '../users';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  details:Users;

  constructor(private githubService:GithubHttpService) { }

  ngOnInit() {
    this.nameSearch("nyota254")
  }

  nameSearch(searchName){
    this.githubService.searchUsers(searchName).then(
      () => {
        this.details = this.githubService.details;
        console.log(this.details);
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
