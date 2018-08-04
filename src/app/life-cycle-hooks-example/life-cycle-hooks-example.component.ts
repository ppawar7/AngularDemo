import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks-example',
  templateUrl: './life-cycle-hooks-example.component.html',
  styleUrls: ['./life-cycle-hooks-example.component.css']
})
export class LifeCycleHooksExampleComponent implements OnInit, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {
  company: string;
  userName: string;

  constructor() { }

  ngOnInit() {
    console.log('life cycle component on Init Called');
  }
  ngDoCheck() {
    console.log('life cycle  component:Do Change')
  }

  ngAfterContentInit() {
    console.log('life cycle  component:ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('life cycle  component:ngAfterContentChecked')
  }
  ngAfterViewChecked() {
    console.log('life cycle  component:ngAfterViewChecked')
  }
  ngAfterViewInit() {
    console.log('life cycle  component:ngAfterViewInit')
  }
};

