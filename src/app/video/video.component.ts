import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video';
import { VideoService } from '../Service/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  Video!:Video;
  listVideo!: Video[];  

  constructor(private VideoService:VideoService, private route:Router) { }

  ngOnInit(): void {
    this.VideoService.getVideo().subscribe((data:Video[])=>{
      this.listVideo=data
    })
  }

}
