import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent {

  @Input() value = 0

  messageMapping:
      {[k: string]: string} = {'=0': 'empty', '=1': 'item', 'other': 'items'};


}
