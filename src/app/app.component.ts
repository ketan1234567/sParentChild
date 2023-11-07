import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <h1>Parent component</h1>
  
  <p>Message sent to child</p><input type="text"  #myColor (keypress)= "setData(myColor.value)" >
  <br><br>
  Message From Child  component data{{childdata}}
  <app-emp  [anil]="parentData" (messageToParent)="receiveMessage($event)">

  </app-emp>


  <br>

  
  `,
  styleUrls: ['./app.component.css'],
encapsulation: ViewEncapsulation.None,
inputs:['parentData.pdata']

})
export class AppComponent {
  parentData:any
  childdata:any
  title = 'sParentChild';
  setData(value:any){
 console.log(value);
 this.parentData=value
  }
  receiveMessage(message:any){
    console.log('Received message from child:', message);
    this.childdata=message

  }
  
}
