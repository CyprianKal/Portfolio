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
    window.scrollTo(-100,document.body.scrollHeight);
  }

  

  changeColor(x:string){
    if(x=="ciemny"){
      document.body.className = document.body.className.replace("jasny","");
      document.getElementById('kontener').className = "";
      document.getElementById('opcjagoraprawo').className = "";
      document.getElementById('opcjadollewo').className = "";
      document.getElementById('opcjadolprawo').className = "";
      document.getElementById('opcjagoralewo').className = "";
      document.getElementById('kontenerr').className="";
      document.getElementById('krocej').className="";
      document.getElementById('dluzej').className="";
      document.getElementById('krocej').style.color="#6a4ba3";  
      document.getElementById('pe').className="";
      document.getElementById('pepe').className="";
    }
    else{
      document.body.className = "jasny";
      document.getElementById('kontener').className = "jasny";
      document.getElementById('opcjagoraprawo').className = "jasnyprzycisk1";
      document.getElementById('opcjadollewo').className = "jasnyprzycisk1";
      document.getElementById('opcjadolprawo').className = "jasnyprzycisk2";
      document.getElementById('opcjagoralewo').className = "jasnyprzycisk2";
      document.getElementById('kontenerr').className="jasnydr";
      document.getElementById('krocej').className="jasnyopis";
      document.getElementById('dluzej').className="jasnyopis";
      document.getElementById('krocej').style.color="rgb(226, 220, 220)"    
      document.getElementById('pe').className="jasnep";
      document.getElementById('pepe').className="jasnep";
    }
  }
}
