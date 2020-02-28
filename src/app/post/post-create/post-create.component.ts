import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.post = new Post(null, null, null, null);
  }

  save() {
    this.postService.createPost(this.post).subscribe(
      (response: HttpResponse<Post>) => {
        const newPost = response.body;
        alert(`Creado nuevo post ${newPost.id}, ${newPost.title}, ${newPost.body}, ${newPost.userId}`);
        this.router.navigate(['/posts']);
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);

      }
    ); //hay que hacer una suscripcion porque hay un observable aunque no se haga nada con ellos
  }

}
