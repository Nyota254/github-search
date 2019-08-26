import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Repositorys } from './repositorys';

@Injectable({
  providedIn: 'root'
})
export class GithubHttpService {

  details: Users;
  repositorys: Repositorys[];
   myApi = "f584cc7efcaa8fb7f7295d6118fc6ae3d7b74cb7"

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

    let searchPoint = "https://api.github.com/users/" + searchName + "?access_token=" + this.myApi;

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


  searchRepositorys(searchRepos,show){
    let promise = new Promise((resolve,reject)=>{
      this.http.get("https://api.github.com/search/repositories?q="+searchRepos+"&per_page="+show+"&sort=forks&order=asc?access_token="+this.myApi).toPromise().then(reporesponse=>{
        this.repositorys=[];
            for(let i=0; i<show; i++){
              let reponame = reporesponse["items"][i]["full_name"];
              let repodescription = reporesponse ["items"][i]["description"];
              let repourl = reporesponse ["items"][i]["html_url"]
              let repo = new Repositorys(reponame,repodescription,repourl);
              this.repositorys.push(repo);
            }
        resolve();
      },error=>{
        console.log('error')
        reject(error);
      })
    })
    return promise;
  }
  }
