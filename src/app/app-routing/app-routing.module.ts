import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { ListTweetsComponent } from './../list-tweets/list-tweets.component';
import { TweetDetailComponent } from './../tweet-detail/tweet-detail.component';

const routes : Routes = [
  {path :'', redirectTo: '/tweets', pathMatch : 'full'},
  {path :'tweets', component : ListTweetsComponent},
  {path : 'tweet/:id', component : TweetDetailComponent}, 
];
@NgModule({
  imports: [
    RouterModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { } 
