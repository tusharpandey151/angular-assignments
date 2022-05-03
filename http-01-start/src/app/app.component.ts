import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching =false;
  error = null;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.onFetchPosts();
    this.httpService.postUpdateEvent.subscribe((response) => {
      this.onFetchPosts();
    })
    //setInterval(()=>this.onFetchPosts(), 3000);
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.httpService.createPost(postData);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.httpService.getPosts().subscribe(
      (responseData)=> {
        console.log(responseData);
        this.loadedPosts = responseData;
        this.isFetching = false;
    }, (error)=> {
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.httpService.deletePosts().subscribe((response)=> {
      this.loadedPosts = [];
      this.httpService.postUpdateEvent.next(response);
    });
  }

  handleError() {
    this.error = null;
    this.isFetching = false;
  }
}
