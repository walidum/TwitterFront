import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-tweets',
  templateUrl: './list-tweets.component.html',
  styleUrls: ['./list-tweets.component.css']
})
export class ListTweetsComponent implements OnInit {
tweets : any; 
hashtag : string;
searching  = false;
totalShow = false; 
totalTweets = 0; 
labelHachtag :string; 

  constructor( public  api: ApiService,public router: Router) { 
    this.tweets  = [] ;
    this.hashtag = "";  
    this.totalShow=false;
  }

  ngOnInit() {
  }

  search(){ 
    if(this.hashtag.length>0){
        this.labelHachtag= this.hashtag;
        if(this.totalShow){
          this.totalShow=false;
        }
        this.searching = !this.searching; 
        this.api.search(this.hashtag).subscribe(response => { 
        this.tweets = response.data ; 
        this.totalTweets = this.tweets.length;
        this.searching=!this.searching;
        this.totalShow =!this.totalShow;
      })
    }
     this.hashtag=""; 
  }
  navigate ( id){
    console.log(id);
    this.router.navigateByUrl('/tweet/'+id);
  }
}