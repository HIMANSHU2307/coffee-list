import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ngrxRoot } from 'src/app/store';
import { CoffeeItem, RootState } from 'src/app/store/reducer';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageNumber: number = 0;
  pageSize: number = 20;
  listLength: number = 50
  coffeeList = [];
  paginationArray: any = [];
  storePageNumber: number = -1;
  // count1$: Observable<CoffeeItem[]>;

  constructor(private store: Store<{ rootState: RootState }>, private router: Router) {
    // this.count1$ = this.store.pipe(select(selectCoffeeList))
    this.setPagination();
   }

  ngOnInit(): void {
    this.getCoffeeList();
  }

  getCoffeeList() {
    this.store.subscribe(post => {
      const jsonList = JSON.parse(JSON.stringify(post.rootState))?.coffeeList;
      this.coffeeList = jsonList.slice(this.pageNumber*10, this.pageNumber*10 + 10)
      this.coffeeList.length ? null : this.coffeeList = jsonList.slice(-10) || []
        this.storePageNumber = post.rootState.pagesLoaded;
      });
      if(this.pageNumber > this.storePageNumber) {
        this.store.dispatch(ngrxRoot.ApiGetCoffeeList({size: this.pageSize, page: this.pageNumber}));
      }
  }

  setPagination() {
    for (let i = 0; i < this.listLength/10; i++) {
      this.paginationArray.push(i);
    }
  }

  moveList(num: number) {
    this.pageNumber = num;
      this.getCoffeeList();
  }

  navigateToDetail(item: CoffeeItem) {
    this.store.dispatch(ngrxRoot.SelectItemSuccess({data: item}));
    this.router.navigate(['/detail']);
  }

}
