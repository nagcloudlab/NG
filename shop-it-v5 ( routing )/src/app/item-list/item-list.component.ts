import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../item.service'
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Output() buy = new EventEmitter()

  items = []

  // dependency injection
  constructor(private itemService: ItemService) { }

  // life-cycle-hook
  ngOnInit() {
    const promise = this.itemService.getItems();
    promise
      .then(response => response.json())
      .then(items => {
        this.items = items
      })

  }


}
