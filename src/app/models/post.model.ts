export class Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;

  constructor(userId?: number, id?: number, title?: string, body?: string) {
    this.userId = userId || null;
    this.id = id || null;
    this.title = title || null;
    this.body = body || null;
  }

}