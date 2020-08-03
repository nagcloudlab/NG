import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VotingDashboardComponent } from './voting-dashboard/voting-dashboard.component';
import { VotingItemComponent } from './voting-item/voting-item.component';
import { VotingSummaryComponent } from './voting-summary/voting-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingDashboardComponent,
    VotingItemComponent,
    VotingSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
