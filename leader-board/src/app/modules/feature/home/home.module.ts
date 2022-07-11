import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LeaderBoardComponent } from './containers/leader-board/leader-board.component';
import { SharedModule } from '@app-shared/shared.module';


@NgModule({
  declarations: [
    LeaderBoardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
