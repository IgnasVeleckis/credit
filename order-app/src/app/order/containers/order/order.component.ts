import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent{

  constructor() { }

  formValue: string = '1';

  change(event){
    console.log(event)
    this.formValue = event;
  }

}
