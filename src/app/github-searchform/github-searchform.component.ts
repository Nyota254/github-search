import { Component, OnInit,Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-github-searchform',
  templateUrl: './github-searchform.component.html',
  styleUrls: ['./github-searchform.component.css']
})
export class GithubSearchformComponent implements OnInit {
 
  /*****************************************************
   This is the start of emmission of userprofile search
   ******************************************************/
  @Output() emmitSearch = new EventEmitter<string>();
  searchName:string;
   
  search(){
    this.emmitSearch.emit(this.searchName);
  }

/************************************************
  This is the end of userprofile emmision code
 ************************************************/

 /*************************************************
  * This is the start of repository search eventemmision
  ***************************************************/
  @Output() emmitRepositorySearch =new EventEmitter<string>();
  RepoName: string;

  searchRepository() {
    this.emmitRepositorySearch.emit(this.RepoName);
  } 
/******************************
 * End of repository search
 ******************************/
  constructor() { }

  ngOnInit() {
  }

}
