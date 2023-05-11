import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../model/video'


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  url:string="http://localhost:3000/products";
  constructor(private http:HttpClient) { }

  getVideo(){
    return this.http.get<Video[]>(this.url);
  }
  postVideo(video: Video){
    return this.http.post(this.url,video);
  }
  deleteVideo(id: number){
    return this.http.delete(this.url+'/'+id);
  }
  putVideo(video:Video){
    return this.http.put(this.url,video);
  }
}
