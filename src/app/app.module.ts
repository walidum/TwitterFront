import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ListTweetsComponent } from './list-tweets/list-tweets.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ApiService } from './services/api.service';
@NgModule({
   declarations: [
      AppComponent,
      ListTweetsComponent,
      TweetDetailComponent,
      SearchBarComponent
   ],
   imports: [
      HttpClientModule,BrowserModule, RouterModule,FormsModule, AppRoutingModule   ],
   providers: [ApiService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
