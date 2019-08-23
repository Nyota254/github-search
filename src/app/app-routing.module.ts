import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchformComponent } from './github-searchform/github-searchform.component';


const routes: Routes = [
  { path:'home', 'component':GithubSearchComponent},
  { path:'GithubSearchformComonent', 'component':GithubSearchformComponent},
  { path:'', redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
