import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor() { }
  goToBottom(){
    window.scrollTo(-100,document.body.scrollHeight);
  }
  ngOnInit() {
    setTimeout(this.goToBottom, 100);
  }
  
  alarm(){
    alert("cyprian_kalina@wp.pl");
  }
}
