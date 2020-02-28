import { NgModule } from '@angular/core';
import { SquarePipePipe } from './square-pipe.pipe';
import { QuitaEspaciosPipe } from './quita-espacios.pipe';



@NgModule({
  declarations: [SquarePipePipe, QuitaEspaciosPipe],
  exports: [
    SquarePipePipe, QuitaEspaciosPipe
  ]
})
export class MisPipesModule { }
