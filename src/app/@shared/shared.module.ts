import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ej2Module } from './ej2/ej2.module';

@NgModule({
  imports: [Ej2Module, FlexLayoutModule],
  exports: [Ej2Module, FlexLayoutModule],
  providers: [],
})
export class SharedModule {}
