import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    let stream = this.itemService.getItems('elec')
    stream.subscribe((items: any) => {
      this.items = items;
    })
  }

}
