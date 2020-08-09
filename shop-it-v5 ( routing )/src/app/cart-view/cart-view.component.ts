import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cart: Map<any, any> = new Map();
  isCartEmpty = true

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart(); // get intial cart
    this.isCartEmpty = this.cart.size === 0
    this.cartService.getCartStream()
      .subscribe((cart: any) => {
        this.cart = cart
        this.isCartEmpty = this.cart.size === 0
      })
  }
  handleBuy(itemId, qty) {
    this.cartService.incOrDecCartQty(itemId, qty);
  }

}
