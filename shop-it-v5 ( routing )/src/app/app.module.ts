import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemComponent } from './item/item.component';
import { ReviewComponent } from './review/review.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { DiscountPipe } from './discount.pipe';
import { CartViewComponent } from './cart-view/cart-view.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersViewComponent } from './orders-view/orders-view.component';
import { LoginComponent } from './login/login.component';


const routes = [
  { path: '', component: DashboardComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'cart', component: CartViewComponent },
  { path: 'orders', component: OrdersViewComponent },
  { path: 'login', component: LoginComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemComponent,
    ReviewComponent,
    CartBadgeComponent,
    DiscountPipe,
    CartViewComponent,
    ItemListComponent,
    ReviewFormComponent,
    DashboardComponent,
    OrdersViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
