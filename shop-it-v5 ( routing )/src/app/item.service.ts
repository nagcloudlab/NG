import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// component ==> Non-UI logic  e.g n/w calls

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  base_url = "http://localhost:8080/api/items"

  constructor(private httpClient: HttpClient) { }

  getItems() {
    const apiUrl = this.base_url
    const promise = fetch(apiUrl)
    return promise;
  }

  getItemReviews(itemId) {
    let apiUrl = `${this.base_url}/${itemId}/reviews`;
    return fetch(apiUrl)
  }
  saveItemReview(itemId, review) {
    let apiUrl = `${this.base_url}/${itemId}/reviews`;
    return this.httpClient.post(apiUrl, review)
  }


}
