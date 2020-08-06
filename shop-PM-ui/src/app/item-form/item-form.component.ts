import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {


  itemForm: FormGroup;

  constructor(private fb: FormBuilder,
    private itemsService: ItemsService,
    private router: Router) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: [''],
      price: [0],
      canBuy: [true],
      description: ''
    })
  }

  handleSubmit() {
    let formData = this.itemForm.value;
    this.itemsService.save(formData)
      .subscribe(result => {
        this.router.navigate(['all'])
      })
  }

}
