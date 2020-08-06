import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    const apiUrl = "http://localhost:8080/api/items";
    return this.httpClient.get(apiUrl)
  }
  save(item) {
    const apiUrl = "http://localhost:8080/api/items";
    return this.httpClient.post(apiUrl, item)
  }

}
