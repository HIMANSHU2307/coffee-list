import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ngrxRoot } from 'src/app/store';
import {  defaultItem, RootState } from 'src/app/store/reducer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  selectedItem = defaultItem;

  constructor(private store: Store<RootState>, private router: Router) {
  }

  ngOnInit(): void {
    this.store.subscribe((post: any) => {
      this.selectedItem = JSON.parse(JSON.stringify(post.rootState))?.selectedItem;
      this.selectedItem?.uid ? null : this.router.navigate(['/'])
    });
  }

}
