import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from 'src/app/shared.module';
import { PageDetailRoutingModule } from './page-detail-routing.module';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    PageDetailRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class PageDetailModule { }
