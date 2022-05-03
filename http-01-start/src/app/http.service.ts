import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, Subscription } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({providedIn:"root"})
export class HttpService {

    postUpdateEvent = new Subject<any>();

    constructor(private http:HttpClient) {

    }

    getPosts() : Observable<Post[]> {
       return this.http.get<{[key:string]:Post}>('https://http-test-e9893-default-rtdb.firebaseio.com/posts.json'
       ,{
           headers: new HttpHeaders({
               'Custom-Header':'Hello Tushar',
               'CustomHEader': 'HEllo Tu'
           }),
           params: new HttpParams().set('print','pretty')
       }
       ).pipe(map(
            // (responseData:{[key:string]:Post}) => {
             (responseData) => {
               let postArray : Post[] = [];
               for ( let key in responseData) {
                 if(responseData.hasOwnProperty(key)) {
                   postArray.push({...responseData[key], id:key});
                 }
               }
               return postArray;
              
           })
       );
}

    createPost(post: Post) {
        this.http.post<{name:string}>('https://http-test-e9893-default-rtdb.firebaseio.com/posts.json', post,
        {
            observe: 'response'
        }).subscribe(
            (responseData)=> {
              console.log(responseData);
              this.postUpdateEvent.next(responseData);
          });
          
    }

    deletePosts(): Observable<any> {
        return this.http.delete('https://http-test-e9893-default-rtdb.firebaseio.com/posts.json', 
        {
            observe : 'events',
            responseType : 'text'//default is json, can also be blob, etc
        }).pipe(tap(
            (event)=> {
                console.log(event);
                if(event.type === HttpEventType.Sent){
                    console.log('Request Sent');
                }
                if(event.type === HttpEventType.Response) {
                    console.log(event.body);
                }
            }
        ));
    }
}