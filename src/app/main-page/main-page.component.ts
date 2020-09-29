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
      document.getElementById('buttoncolor').style.backgroundColor="#30214d";
      document.getElementById('buttoncolor').style.color="#64567e";
    }
    else{
      document.getElementById('buttoncolor').style.backgroundColor="#4e3b74";
      document.getElementById('buttoncolor').style.color="#796e8d";
      document.body.className = "jasny";
      document.getElementById('kontener').className = "jasny";
      document.getElementById('opcjagoraprawo').className = "jasnyprzycisk1";
      document.getElementById('opcjadollewo').className = "jasnyprzycisk1";
      document.getElementById('opcjadolprawo').className = "jasnyprzycisk2";
      document.getElementById('opcjagoralewo').className = "jasnyprzycisk2";
    }
  }
}
