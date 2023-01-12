import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private http: HttpClient
  ) { }

  apiURL = 'https://random-data-api.com/api/coffee/random_coffee'

  GetCoffeeList(
    size = 10,
    page = 0
  ) {
    return this.http.get(
      `${this.apiURL}?size=${size}&page=${page}`
    );
  }
}
