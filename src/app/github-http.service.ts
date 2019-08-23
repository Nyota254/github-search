import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class GithubHttpService {

  details: Users[] = [];

  constructor(private http:HttpClient) { }
}
