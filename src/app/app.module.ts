import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MiniGameComponent } from './mini-game/mini-game.component';
import { ConversorComponent } from './conversor/conversor.component';
import { MisdirectivasModule } from './misdirectivas/misdirectivas.module';
import { MisPipesModule } from './mis-pipes/mis-pipes.module';
import { DataTableComponent } from './data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiniGameComponent,
    ConversorComponent,
    DataTableComponent,
    PostComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MisdirectivasModule,
    MisPipesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
