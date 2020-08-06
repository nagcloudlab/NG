import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service'
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items = []

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getItems()
      .subscribe((items: Array<any>) => {
        this.items = items;
      })
  }

}
