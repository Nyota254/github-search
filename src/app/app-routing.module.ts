import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubSearchComponent } from './github-search/github-search.component';
import { RepositorySearchpageComponent} from './repository-searchpage/repository-searchpage.component';


const routes: Routes = [
  { path:'home', 'component':GithubSearchComponent},
  {path:'repositorys','component':RepositorySearchpageComponent},
  { path:'', redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
