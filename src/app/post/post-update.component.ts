import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-create/post-create.component.html',
  styleUrls: ['./post-create/post-create.component.css']
})
export class PostUpdateComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService, private router: Router, protected activatedRoute: ActivatedRouteSnapshot) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ post }) => {
      this.post = post;
    })
  }

  save() {
    this.postService.updatePost(this.post).subscribe(
      (response: HttpResponse<Post>) => {
        const newPost = response.body;
        alert(`Actualizado post ${newPost.id}, ${newPost.title}, ${newPost.body}, ${newPost.userId}`);
        this.router.navigate(['/posts']);
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);

      }
    ); //hay que hacer una suscripcion porque hay un observable aunque no se haga nada con ellos
  }

}
