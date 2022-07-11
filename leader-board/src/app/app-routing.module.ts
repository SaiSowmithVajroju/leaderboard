import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   {
//     path: 'home', component: LoginComponent, canActivate:[LoggedInAuthGuard]
// },
// { path: '', redirectTo: 'home', pathMatch: 'full' },
//   {
//     path: 'home',
//     // tslint:disable-next-line:max-line-length
//     loadChildren: () => import('@app-modules/feature/home/home.module').then(m => m.HomeModule),
//     canActivate: []
// },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
