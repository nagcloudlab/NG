import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input("value") message

  now = new Date()

  interval;

  // dependency injection
  constructor() {
    console.log("MessageComponent :: constructor()")
    console.log(this.message)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("MessageComponent :: ngOnChanges()")
    const message = changes.message;
    if (message.currentValue !== message.previousValue) {
      //..
    }
  }


  // one time initialization e.g stream subscription, ...
  ngOnInit(): void {
    console.log("MessageComponent :: ngOnInit()")
    this.interval = setInterval(() => {
      console.log("capturing new time...")
      this.now = new Date()
    }, 1000)
  }

  // ngDoCheck() {
  //   console.log("MessageComponent :: ngDoCheck()")
  // }

  // cleaning before component get removed from UI
  ngOnDestroy(): void {
    console.log("MessageComponent :: ngOnDestroy()")
    clearInterval(this.interval)
  }

}
