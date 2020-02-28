import { NgModule } from '@angular/core';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostComponent } from './post.component';
import { SharedModule } from '../shared/shared.module';
import { PostRouterModule } from './post-router.module';

@NgModule({
  declarations: [
    PostComponent,
    PostCreateComponent
  ],
  imports: [
    PostRouterModule,
    SharedModule
  ]
})
export class PostModule { }
