import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  enabled:boolean=false;
  showColor:boolean=true;
  numberList:number[]=[1,2,3];
  sampleText:string;

  onInputChange(event):void {
console.log(event.target.value);
  };
  calledMe(inputVal:string):void{
alert("Hi"+inputVal);
  };
}
