import { NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PostComponent } from './post.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostService } from '../services/post.service';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { PostUpdateComponent } from '../post/post-update.component';

export class PostResolve implements Resolve<Post> {
  constructor(private service: PostService) {}

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Post> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.getPostById(id).pipe(
        filter((response:HttpResponse<Post>) => response.ok),
        map((post: HttpResponse<Post>) => post.body)
      )
    } else {
      return of(new Post(null, null, null, null));
    }
  }
}
const routes: Routes = [
  {
    path: "",
    component: PostComponent
  },
  {
    path: "create",
    component: PostCreateComponent
  },
  {
    path: "update/:id",
    component: PostUpdateComponent,
    resolve: {
      post: PostResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRouterModule { }
