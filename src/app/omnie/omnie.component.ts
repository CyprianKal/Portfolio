import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-omnie',
  templateUrl: './omnie.component.html',
  styleUrls: ['./omnie.component.css']
})
export class OmnieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(-300,document.body.scrollHeight);
  }
  



}
