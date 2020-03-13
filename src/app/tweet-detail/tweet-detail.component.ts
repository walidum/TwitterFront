import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Tweet } from '../models/tweet';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-tweet-detail',
  templateUrl: './tweet-detail.component.html',
  styleUrls: ['./tweet-detail.component.css']
})
export class TweetDetailComponent implements OnInit {
id: number;
  data: any;
  constructor( public activatedRoute: ActivatedRoute,
    public router: Router, public  api: ApiService,private _location: Location) {
          this.data = [];
     }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.api.getTweet(this.id).subscribe(response => {
      this.data = response.data ; 
    })
  }
  back(){
    this._location.back();
  }
}