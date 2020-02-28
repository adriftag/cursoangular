import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MiniGameComponent } from './mini-game/mini-game.component';
import { HomeComponent } from './home/home.component';
import { ConversorComponent } from './conversor/conversor.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


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
    component: DataTableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "posts",
    loadChildren: () => import('./post/post.module').then(mod => mod.PostModule)
  },
  {
    path: "login",
    component: LoginComponent
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
