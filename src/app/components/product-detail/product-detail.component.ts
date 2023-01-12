import { Component, Input, OnInit } from '@angular/core';
import { CoffeeItem } from 'src/app/store/reducer';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input () selectedItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
