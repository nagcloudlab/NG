import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';


import { WelcomeComponent } from './welcome/welcome.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'all', component: ItemListComponent },
  { path: 'new', component: ItemFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    WelcomeComponent,
    ItemListComponent,
    ItemFormComponent,
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
