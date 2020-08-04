import { Injectable } from '@angular/core';
import { Subject } from 'rxjs' // reactive programming lib

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = []
  stream = new Subject() // data channel

  constructor() { }

  getCartStream() {
    return this.stream;
  }

  addToCart(e) {
    let item = e;
    this.cart.push(item)
    this.stream.next(this.cart) // publish data into channel
    // setInterval(() => {
    //   this.cart.push({ name: 'ITEM', price: 1000.00 })
    //   this.stream.next(this.cart) // publish data into channel
    // }, 1000)
  }

}
