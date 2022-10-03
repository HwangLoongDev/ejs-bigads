import { NgModule } from '@angular/core';
import { Ej2Module } from './ej2/ej2.module';

@NgModule({
  imports: [Ej2Module],
  exports: [Ej2Module],
  providers: [],
})
export class SharedModule {}
