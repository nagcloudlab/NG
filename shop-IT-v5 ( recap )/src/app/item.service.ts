import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }

  getItems(cat) {
    const apiUrl = "http://localhost:8080/api/items"
    let stream = this.httpClient.get(apiUrl)
    return stream;
  }

}
