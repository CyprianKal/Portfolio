import { global } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omnie',
  templateUrl: './omnie.component.html',
  styleUrls: ['./omnie.component.css']
})
export class OmnieComponent implements OnInit {

  constructor() { }
  
  goToBottom(){
    window.scrollTo(-100,document.body.scrollHeight);
  }
  ngOnInit() {
    setTimeout(this.goToBottom, 500);
  }
  



}
