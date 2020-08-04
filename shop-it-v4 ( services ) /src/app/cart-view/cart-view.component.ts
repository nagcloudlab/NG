import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cartItems;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartStream()
      .subscribe(cart => {
        this.cartItems = cart;
      })
  }

}
