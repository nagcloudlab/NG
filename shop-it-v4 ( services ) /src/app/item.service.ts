import { Injectable } from '@angular/core';

// component ==> Non-UI logic  e.g n/w calls

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  base_url = "http://localhost:8080/api/items"

  constructor() { }

  getItems() {
    const apiUrl = this.base_url
    const promise = fetch(apiUrl)
    return promise;
  }

  getItemReviews(itemId) {
    let apiUrl = `${this.base_url}/${itemId}/reviews`;
    return fetch(apiUrl)
  }


}
