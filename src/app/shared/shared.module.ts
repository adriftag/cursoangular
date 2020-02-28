import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MisdirectivasModule } from '../misdirectivas/misdirectivas.module';
import { MisPipesModule } from '../mis-pipes/mis-pipes.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MisdirectivasModule,
    MisPipesModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MisdirectivasModule,
    MisPipesModule
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}
