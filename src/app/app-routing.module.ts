import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiniGameComponent } from './mini-game/mini-game.component';
import { HomeComponent } from './home/home.component';
import { ConversorComponent } from './conversor/conversor.component';
import { DataTableComponent } from './data-table/data-table.component';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post/post-create/post-create.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'miniGame',
    component: MiniGameComponent
  },
  {
    path: 'conversor',
    component: ConversorComponent
  },
  {
    path: "data-table",
    component: DataTableComponent
  },
  {
    path: "posts",
    component: PostComponent
  },
  {
    path: "create/post",
    component: PostCreateComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
