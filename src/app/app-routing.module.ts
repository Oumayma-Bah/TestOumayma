import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { AddVideoComponent } from './add-video/add-video.component';

const routes: Routes = [
  {path:'',redirectTo:'videos', pathMatch:'full'},
  {path:'videos',component:VideoComponent},
  {path:'add',component:AddVideoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
