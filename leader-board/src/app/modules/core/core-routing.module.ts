import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderBoardComponent } from '@app-modules/feature/home/containers/leader-board/leader-board.component';

const routes: Routes = [
  {
    path: 'home', component: LeaderBoardComponent, canActivate:[]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
      path: 'home',
      loadChildren: () => import('@app-modules/feature/home/home.module').then(m => m.HomeModule),
      canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
