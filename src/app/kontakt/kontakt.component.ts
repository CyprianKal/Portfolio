import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(-300,document.body.scrollHeight);
  }
  
  alarm(){
    alert("cyprian_kalina@wp.pl");
  }
}
