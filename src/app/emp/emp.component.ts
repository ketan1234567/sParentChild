import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emp',
  template: `    <div>
  <h1>Child works!</h1>

<p>
    Message From Prent component data:{{anil}}
</p>


<p>Message sent from child to parent component</p><input type="text"  #myColor (keypress)= "setData(myColor.value)" >
</div>`,
  styleUrls: ['./emp.component.css'],
})
export class EmpComponent {
  @Input() anil: any;

  @Output() messageToParent =new EventEmitter 



  setData(value:any){
    this.messageToParent.emit(value);

     }



}
