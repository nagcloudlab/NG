import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input("value")
  item;

  currentTab = 1;

  changeTab(event, tabIndex) {
    this.currentTab = tabIndex;
  }
  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex;
  }


}
