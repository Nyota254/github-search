import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubSearchformComponent } from './github-searchform/github-searchform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositorySearchpageComponent } from './repository-searchpage/repository-searchpage.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    GithubSearchformComponent,
    NavbarComponent,
    RepositorySearchpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
