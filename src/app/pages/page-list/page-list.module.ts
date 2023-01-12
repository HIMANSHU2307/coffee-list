import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { PageListRoutingModule } from './page-list-routing.module';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    PageListRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class PageListModule { }
