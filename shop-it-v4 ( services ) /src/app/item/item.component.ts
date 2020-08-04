import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../item.service';
import { CartService } from '../cart.service';

// component ==> UI logic

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input()
  item;
  // @Output()
  // buy = new EventEmitter()
  reviews = []
  currentTab = 1;

  constructor(private itemService: ItemService, private cartService: CartService) { }

  changeTab(event, tabIndex) {
    this.currentTab = tabIndex;
    if (this.currentTab === 3) {
      this.itemService.getItemReviews(this.item.id)
        .then(response => response.json())
        .then(reviews => {
          this.reviews = reviews
        })
    }
  }

  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }

  handleBuy() {
    // this.buy.emit(this.item)
    this.cartService.addToCart(this.item)
  }


}
