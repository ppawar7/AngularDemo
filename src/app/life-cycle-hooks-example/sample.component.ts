import { Component, OnInit, OnChanges,Input,  SimpleChanges,DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit{
  changeLog:string[]=[];
  constructor() { }
  @Input() userName: string;
  @Input() company: string;
  ngOnInit() {

    console.log('sample Example oninit')
  }
  ngOnChanges(changes:SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      console.log('ONCHANGE'+JSON.stringify(this.changeLog));
    }
  }
  ngDoCheck() {
console.log('Sample component:Do Change')
  }

  ngAfterContentInit() {
    console.log('sample component:ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('sample component:ngAfterContentChecked')
  }
  ngAfterViewChecked() {
    console.log('sample component:ngAfterViewChecked')
  }
  ngAfterViewInit() {
    console.log('sample component:ngAfterViewInit')
  }
}
