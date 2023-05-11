import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video';
import { VideoService } from '../Service/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  Video!: Video;  
  listVideo!: Video[];  
  constructor(private vs:VideoService, private route:Router) { }

  ngOnInit(): void {
    this.Video=new Video}

  ajouter(){
    //this.ps.addProduct(this.Product);
    //this.route.navigateByUrl('/products');
    this.vs.postVideo(this.Video).subscribe({next: (data)=>this.route.navigateByUrl('/video'),
  })
  }

}
