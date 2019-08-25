import { Component, OnInit } from '@angular/core';
import { GithubHttpService } from '../github-http.service';
import { Repositorys } from '../repositorys';

@Component({
  selector: 'app-repository-searchpage',
  templateUrl: './repository-searchpage.component.html',
  styleUrls: ['./repository-searchpage.component.css']
})
export class RepositorySearchpageComponent implements OnInit {

  repository:Repositorys[];

  constructor(private _http:GithubHttpService) { }

  repoName(RepoName:string){
    this._http.searchRepositorys(RepoName,10).then(
      () => {
        this.repository = this._http.repositorys;
        console.log(RepoName);
        console.log(this.repository);
      },
      (error) => {
        console.log(error)
      }
    )
  }

  ngOnInit() {
  }

}
