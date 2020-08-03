import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input()
  item;

  @Output()
  buy = new EventEmitter()

  reviews = [
    { author: 'who1@mail.com', stars: 5, body: 'sample-review-1' },
    { author: 'who2@mail.com', stars: 3, body: 'sample-review-2' }
  ]

  currentTab = 1;

  changeTab(event, tabIndex) {
    this.currentTab = tabIndex;
  }

  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }

  handleBuy() {
    this.buy.emit({ item: this.item })
  }


}
