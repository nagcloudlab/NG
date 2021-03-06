import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent {

  value = 0

  constructor(private cartService: CartService) { }

  ngOnInit() {
    
    const cartStream = this.cartService.getCartStream()
    this.value = this.cartService.getCartQty()

    cartStream.subscribe((cart: Array<any>) => {
      this.value = this.cartService.getCartQty()
    })
    
  }

  messageMapping:
    { [k: string]: string } = { '=0': 'empty', '=1': 'item', 'other': 'items' };


}
