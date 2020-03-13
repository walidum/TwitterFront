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
  constructor( public  api: ApiService,public router: Router) { 
    this.tweets  = [] ;
    this.hashtag = "";
  }

  ngOnInit() {
  }
  navigate ( id){
    console.log(id);
    this.router.navigateByUrl('/tweet/'+id);
  }
  search(){
    if(this.hashtag.length>0){
      this.api.search(this.hashtag).subscribe(response => {
        console.log(response); 
        this.tweets = response.data ; 
      })
    }
    this.hashtag="";
  }

}