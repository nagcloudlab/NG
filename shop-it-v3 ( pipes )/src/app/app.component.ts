import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "shop-it-v3 - pipes";
  items = [
    {
      id: 1,
      name: 'Laptop',
      price: 149000,
      discount:49000,
      currency_code: "INR",
      description: 'New mac pro',
      canBuy: true,
      imagePath: "assets/Laptop.png",
      mdate:Date.now()
    },
    {
      id: 2,
      name: 'Mobile',
      price: 1000,
      currency_code: "INR",
      description: 'New  pro',
      canBuy: true,
      imagePath: "assets/Mobile.png",
      mdate:Date.now()
    },
  ]
  cart = []

  addToCart(e) {
    let item = e;
    this.cart.push(item)
  }

}
