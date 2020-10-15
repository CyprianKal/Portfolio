import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  constructor() { }
  goToBottom(){
    window.scrollTo(-100,document.body.scrollHeight);
  }
  ngOnInit() {
    setTimeout(this.goToBottom, 100);
  }
  

}
