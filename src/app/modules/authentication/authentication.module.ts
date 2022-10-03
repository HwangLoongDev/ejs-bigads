import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from 'src/app/@core/core.module';
import { SharedModule } from 'src/app/@shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';

const Routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(Routes), SharedModule, CoreModule],
  exports: [RouterModule],
  providers: [],
  declarations: [SignInComponent],
})
export class AuthenticationModule {}
