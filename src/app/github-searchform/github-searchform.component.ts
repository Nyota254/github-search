import { Component, OnInit,Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-github-searchform',
  templateUrl: './github-searchform.component.html',
  styleUrls: ['./github-searchform.component.css']
})
export class GithubSearchformComponent implements OnInit {

  @Output() emmitSearch = new EventEmitter<string>();
  searchName:string;
   
  search(){
    this.emmitSearch.emit(this.searchName);
  }

  constructor() { }

  ngOnInit() {
  }

}
