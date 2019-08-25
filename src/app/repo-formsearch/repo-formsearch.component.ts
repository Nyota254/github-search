import { Component, OnInit,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-repo-formsearch',
  templateUrl: './repo-formsearch.component.html',
  styleUrls: ['./repo-formsearch.component.css']
})
export class RepoFormsearchComponent implements OnInit {

  @Output() emmitRepositorySearch =new EventEmitter<string>();
  RepoName: string;

  searchRepository() {
    this.emmitRepositorySearch.emit(this.RepoName);
  } 

  constructor() { }

  ngOnInit() {
  }

}
