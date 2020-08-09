import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';


import { WelcomeComponent } from './welcome/welcome.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemViewComponent } from './item-view/item-view.component';

import { ItemsResolverService } from './items-resolver.service'
import { AuthGuardService } from './auth-guard.service'
import { FormStateCheckService } from './form-state-check.service'
import { AuthrozationGuardService } from './authrozation-guard.service'

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'all',
    component: ItemListComponent,
    resolve: {
      items: ItemsResolverService,
      // otherData:OtherResolver
    },
    data: {
      myData: { name: 'Nag' }
    },
    canActivateChild:[AuthrozationGuardService],
    children: [
      { path: 'view/:itemId', component: ItemViewComponent },
      { path: 'edit/:itemId', component: ItemFormComponent },
    ]
  },
  {
    path: 'new',
    component: ItemFormComponent,
    canActivate: [AuthGuardService],
    canDeactivate: [FormStateCheckService]
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    WelcomeComponent,
    ItemListComponent,
    ItemFormComponent,
    ItemViewComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
