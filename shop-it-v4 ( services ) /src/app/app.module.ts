import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemComponent } from './item/item.component';
import { ReviewComponent } from './review/review.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { DiscountPipe } from './discount.pipe';
import { CartViewComponent } from './cart-view/cart-view.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemComponent,
    ReviewComponent,
    CartBadgeComponent,
    DiscountPipe,
    CartViewComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
