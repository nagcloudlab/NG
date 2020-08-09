import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items = [] // empty

  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.itemsService.getItems()
    //   .subscribe((items: Array<any>) => {
    //     this.items = items;
    //   })
    this.route.data
      .subscribe(data => {
        console.log(data.myData)
        this.items = data.items
      })
  }

  deleteItem(itemId, event) {
    event.preventDefault()
    this.itemsService.deleteItem(itemId)
      .subscribe((result: any) => {
        if (result.count === 1)
          this.items = this.items.filter(item => item.id !== itemId)
      })
  }

}
