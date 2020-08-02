import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "shop-it-v2 - comp based arch";

  items = [
    {
      id: 1,
      name: 'Laptop',
      price: 149000,
      description: 'New mac pro',
      canBuy: true,
      imagePath: "assets/Laptop.png"
    },
    {
      id: 2,
      name: 'Mobile',
      price: 1000,
      description: 'New  pro',
      canBuy: true,
      imagePath: "assets/Mobile.png"
    },

  ]

}
