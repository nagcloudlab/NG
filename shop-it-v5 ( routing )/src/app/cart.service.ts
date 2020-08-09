import { Injectable } from '@angular/core';
import { Subject } from 'rxjs' // reactive programming lib

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new Map<any, any>()
  stream = new Subject() // data channel
  cartQty = 0;

  constructor() { }

  initilizeCart() {
    this.cart = new Map(JSON.parse(localStorage.getItem('cart')))
    this.cart.forEach(line => {
      this.cartQty += line.qty
    })
  }

  getCartStream() {
    return this.stream;
  }

  getCart() {
    return this.cart;
  }
  getCartQty() {
    return this.cartQty;
  }

  incOrDecCartQty(itemId, qty) {
    let cartLine = this.cart.get(itemId)
    cartLine = { ...cartLine, qty: cartLine.qty + qty }
    this.cart.set(itemId, cartLine)
    console.log(this.cart)
    localStorage.setItem('cart', JSON.stringify(Array.from(this.cart.entries())))
    this.stream.next(this.cart)
  }

  addToCart(e) {
    let item = e;
    let cartLine = this.cart.get(item.id)
    if (cartLine) {
      cartLine = { item, qty: cartLine.qty + 1 }
    } else {
      cartLine = { item, qty: 1 }
    }
    this.cart.set(item.id, cartLine)
    localStorage.setItem('cart', JSON.stringify(Array.from(this.cart.entries())))
    this.stream.next(this.cart) // publish data into channel
    // setInterval(() => {
    //   this.cart.push({ name: 'ITEM', price: 1000.00 })
    //   this.stream.next(this.cart) // publish data into channel
    // }, 1000)
  }

}
