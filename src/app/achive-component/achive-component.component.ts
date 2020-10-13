import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achive-component',
  templateUrl: './achive-component.component.html',
  styleUrls: ['./achive-component.component.css']
})
export class AchiveComponentComponent implements OnInit {

  constructor() { }

  goToBottom(){
    window.scrollTo(-100,document.body.scrollHeight);
  }
  ngOnInit() {
    setTimeout(this.goToBottom, 500);
  }

  wysun(x:number){
    
    if (x>0){
   
      document.getElementById("slajd").style.width="80%";
      document.getElementById("slajd").style.height="auto";
      document.getElementById("slajd").style.marginLeft="10%";
    

      const ha = document.getElementById("slajdtytul");
      const pe = document.getElementById("slajdp");
      if (x==1){
        ha.innerText="To portfolio...";
        pe.innerText="To portfolio to mój pierwszy większy projekt w Angulrze. Jestem z niego dumny - zrobiłem go w 100% sam, i wykorzystałem bardzo wiele nowych dla mnie rozwiązań które pomogą mi w dalszym rozwoju ";
      }
 
    }
    else if (x==0){
      document.getElementById("slajd").style.width="0%";
      document.getElementById("slajd").style.height="-1px";

      
    }
  }
}
