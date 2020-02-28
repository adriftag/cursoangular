import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private resourceUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }
  getPosts(): Observable<HttpResponse<Post[]>> {
    return this.http.get<Post[]>(`${this.resourceUrl}`, { observe: 'response' });
  }

  getPostsByPage(start: number, limit: number): Observable<HttpResponse<Post[]>> {
    return this.http.get<Post[]>(`${this.resourceUrl}?_start=${start}&_limit=${limit}`, { observe: 'response' }).pipe(catchError(this.handleError));
  }

  getPostById(id: number): Observable<HttpResponse<Post>> {
    return this.http.get<Post>(`${this.resourceUrl}/${id}`, { observe: 'response' }).pipe(catchError(this.handleError));
  }

  createPost(post: Post): Observable<HttpResponse<Post>> {
    return this.http.post<Post>(`${this.resourceUrl}`, post, { observe: 'response' }).pipe(catchError(this.handleError));
    //aqui se le pasa como segundo parametro el post que le enviamos
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) { //esto significa que el error esta en el front.
      console.error('Error en el back');
    }
    else { console.error('Error en el back'); }

    return throwError(error);
  }
}
