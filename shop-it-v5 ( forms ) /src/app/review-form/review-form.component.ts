import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  isOpen = false
  reviewForm;

  @Output()
  submit = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      author: ['Nag@gmail.com'],
      stars: ['5'],
      body: ['']
    })
  }

  toggleForm() {
    this.isOpen = !this.isOpen
  }

  handleSubmit(event) {
    event.stopPropagation()
    let newReview = this.reviewForm.value;
    this.submit.emit(newReview)
    this.reviewForm.reset()
    this.toggleForm()
  }

}
