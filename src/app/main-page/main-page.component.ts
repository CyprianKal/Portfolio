import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  goToBottom(){
    window.scrollTo(-300,document.body.scrollHeight);
  }

  changeColor(){
    if(document.body.className=="jasny"){
      document.body.className = document.body.className.replace("jasny","");
      document.getElementById('kontener').className = "";
      document.getElementById('opcjagoraprawo').className = "";
      document.getElementById('opcjadollewo').className = "";
      document.getElementById('opcjadolprawo').className = "";
      document.getElementById('opcjagoralewo').className = "";
      document.getElementById('ciemnastrona').style.opacity="1.0";
      document.getElementById('jasnastrona').style.opacity="0.1";
      document.getElementById('zmien').style.color="white";
      document.getElementById('kolor').style.color="black";
    }
    else{

      document.body.className = "jasny";
      document.getElementById('zmien').style.color="black";
      document.getElementById('kolor').style.color="white";

      document.getElementById('buttoncolor').style.color="white";
      document.getElementById('ciemnastrona').style.opacity="0.3";
      document.getElementById('jasnastrona').style.opacity="1.0";
      document.getElementById('kontener').className = "jasny";
      document.getElementById('opcjagoraprawo').className = "jasnyprzycisk1";
      document.getElementById('opcjadollewo').className = "jasnyprzycisk1";
      document.getElementById('opcjadolprawo').className = "jasnyprzycisk2";
      document.getElementById('opcjagoralewo').className = "jasnyprzycisk2";
    }
  }
}
