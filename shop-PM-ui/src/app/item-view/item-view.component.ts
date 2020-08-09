import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {


  item

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //const itemId = this.route.snapshot.paramMap.get('itemId')
    this.route.params
      .subscribe(params => {
        const itemId = params['itemId']
        if (itemId) {
          this.itemsService.getItem(itemId)
            .subscribe((item: any) => {
              this.item = item
            })
        }
      })

  }

}
