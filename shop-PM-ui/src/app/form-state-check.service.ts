import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormStateCheckService {

  constructor() { }

  canDeactivate() {
    //....
    return confirm("Are you sure?")
  }

}
