import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/page-list/page-list.module').then(m => m.PageListModule),
    pathMatch: 'full'
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/page-detail/page-detail.module').then(m => m.PageDetailModule),
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
