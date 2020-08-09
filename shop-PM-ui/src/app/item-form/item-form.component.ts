import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemsService } from '../items.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {


  itemForm: FormGroup;
  isEdit = false
  itemId = null;

  constructor(private fb: FormBuilder,
    private itemsService: ItemsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.itemForm = this.fb.group({
      name: [''],
      price: [0],
      canBuy: [true],
      description: ''
    })

    this.route.params
      .subscribe(params => {
        const itemId = params['itemId']
        if (itemId) {
          this.itemsService.getItem(itemId)
            .subscribe((item: any) => {
              this.itemId = item.id;
              this.isEdit = true
              this.itemForm.patchValue(item)
            })
        }
      })

    // const itemId = this.route.snapshot.paramMap.get('itemId')
    // if (itemId) {
    //   this.itemsService.getItem(itemId)
    //     .subscribe((item: any) => {
    //       this.itemId = item.id;
    //       this.isEdit = true
    //       this.itemForm.patchValue(item)
    //     })
    // }


  }

  handleSubmit(event) {
    let formData = this.itemForm.value;
    if (this.isEdit) {
      console.log(this.itemId)
      this.itemsService.update(formData, this.itemId)
        .subscribe(result => {
          this.isEdit = false;
          this.router.navigate(['all'])
        })
    } else {
      this.itemsService.save(formData)
        .subscribe(result => {
          this.router.navigate(['all'])
        })
    }

  }



}
