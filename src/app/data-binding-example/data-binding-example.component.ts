import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrls: ['./data-binding-example.component.css']
})
export class DataBindingExampleComponent implements OnInit {
  title = 'demo-app';
  enabled: boolean = false;
  showColor: boolean = true;
  numberList: number[] = [1, 2, 3];
  sampleText: string;
  constructor() { }

  ngOnInit() {
  }

  onInputChange(event): void {
    console.log(event.target.value);
  };
  calledMe(inputVal: string): void {
    alert("Hi" + inputVal);
  };
}
