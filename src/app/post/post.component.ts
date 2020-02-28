import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private inicioPagina: number = 0;
  numeroRegistros: number = 10;
  totalItems: number = 0;
  page: number = 1;
  isLoading: boolean = false;
  posts: Post[];
  idToSearch: number;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.reloadPage();
  }

  reloadPage() {
    this.posts = null;
    this.isLoading = true;
    this.inicioPagina = this.page * this.numeroRegistros - this.numeroRegistros;
    this.postService.getPostsByPage(this.inicioPagina, this.numeroRegistros).subscribe(
      (result: HttpResponse<Post[]>) => {
        this.isLoading = false;
        if (result.body) {
          this.posts = result.body;
          this.totalItems = parseInt(result.headers.get('X-Total-Count'), 10);
        }
        else { this.posts = null };
      },
      (error: HttpErrorResponse) => { // de esta forma gestionamos los diferentes resultados
        this.isLoading = false;
        this.posts = null;
        console.error(error.message);
      }
    )
  }

  nextPage() {
    this.inicioPagina += this.numeroRegistros;
    this.page += 1;
    this.reloadPage();
  }
  previousPage() {
    this.inicioPagina = this.inicioPagina <= 0 ? 0 : this.inicioPagina - this.numeroRegistros;
    this.page = this.page <= 1 ? 1 : this.page - 1;
    this.reloadPage();
  }

  searchById() {
    this.postService.getPostById(this.idToSearch).subscribe(
      (result : HttpResponse<Post>) => {
        const postFound = result.body;
        alert(`Post encontrado ${postFound.id}`);
      },
      (error: HttpErrorResponse) => {
        alert('Post no encontrado');
      }
    )
  }
}
