import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubHttpService {

  details: Users;

  constructor(private http:HttpClient) { 
    this.details = new Users("","",0,0,0,"");

  }

  searchUsers(searchName:string){
    interface Apiresponse{
      avatar_url:string;
      login:string;
      public_repos:number;
      followers:number;
      following:number;
      html_url:string;
    }

    let searchPoint = "https://api.github.com/users/" + searchName + "?access_token=" + environment.Api;

    let promise =  new Promise((resolve, reject)=>{
      this.http.get<Apiresponse>(searchPoint).toPromise().then(
        (response)=>{
          this.details.Avatorurl = response.avatar_url 
          this.details.Name = response.login 
          this.details.NumberofRepos =response.public_repos
          this.details.followers = response.followers
          this.details.following = response.following
          this.details.Userprofile = response.html_url
          resolve()
        },
        (error)=>{
          console.log(error)
          reject()
        }
      )
  })
  return promise;
  }

  
}
