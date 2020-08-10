import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  message = "greetings"

  @ViewChild(MessageComponent, {}) messageChild: MessageComponent;
  @ViewChild("box", {}) boxEl: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log("BoxComponent :: ngAfterContentInit()")
  }

  ngAfterViewInit() {
    console.log("BoxComponent :: ngAfterViewInit()")
    //console.log(this.messageChild)
    // Native  DOM Element
    this.boxEl.nativeElement.addEventListener('mouseenter', e => {
      this.boxEl.nativeElement.style.backgroundColor = "#DEF"
    })
    this.boxEl.nativeElement.addEventListener('mouseleave', e => {
      this.boxEl.nativeElement.style.backgroundColor = "#FFF"
    })
  }

  changeMessage(message) {
    this.message = message
  }

}
