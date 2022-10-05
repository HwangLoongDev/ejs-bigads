import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { AvatarComponent } from './common/avatar/avatar.component';
import { UserComponent } from './common/user/user.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { LogoComponent } from './common/logo/logo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule, CommonModule],
  exports: [],
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    AvatarComponent,
    UserComponent,
    LogoComponent,
  ],
  providers: [],
})
export class LayoutModule {}
