import { NgModule } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

const ej2Modules = [ButtonModule];

@NgModule({
  imports: [...ej2Modules],
  exports: [...ej2Modules],
  providers: [],
})
export class Ej2Module {}
