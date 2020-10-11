import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(-300,document.body.scrollHeight);
  }
  

}
