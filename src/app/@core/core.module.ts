import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [LayoutModule],
  exports: [LayoutModule],
  providers: [],
})
export class CoreModule {}
