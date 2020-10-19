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
    setTimeout(this.goToBottom, 100);
  }

  wysun(x:number){
    
    if (x>0){
        
      document.getElementById("slajd").style.width="70%";
      document.getElementById("slajd").style.height="auto";
      document.getElementById("slajd").style.marginLeft="15%";
      document.getElementById("slajd").style.border="5px inset #c5c4c4";
      

      const ha = document.getElementById("slajdtytul");
      const pe = document.getElementById("slajdp");
      document.getElementById("slajd").scrollIntoView({behavior: "auto"});   
      if (x==1){
        ha.innerText="To portfolio...";
        pe.innerText="To portfolio to mój pierwszy większy projekt w Angulrze. Jestem z niego dumny - zrobiłem go w 100% sam, i wykorzystałem bardzo wiele nowych dla mnie rozwiązań które pomogą mi w dalszym rozwoju ";
      }
      else if (x==5){
        
        document.getElementById("slajd").style.fontSize="30px";
        ha.innerText="Witryna cukierni...";
        pe.innerText="To bardzo prosty projekt wykonany w ramach zadań szkolnych. Wyróżnia go jednak to że postanowiłem się tu postawić nauczycielowi, i zamiast pisać sam nudny html i css użyłem jeszcze po raz pierwszy FlexBoxa - i wyszło mi nawet nieźle! ";
      }
      else if (x==2){
        ha.innerText="Herbemesa - mój pierwszy projekt komercyjny..."
        pe.innerHTML="<a href='http://twojezdrowie.net.pl/' title='Klikni by przejsc do strony!' style='text-decoration:none; color:black;' target='_blank'>Może i nie jest idealny, ale to był mój pierwszy projekt w całości zrobiony samemu. Nawet pojawiły się pierwsze skrypty...</a>";
      } 

      else if (x==3){
        document.getElementById("slajd").style.fontSize="30px";
        ha.innerText="Agencja marketingowa..."
        pe.innerHTML="<a href='https://elomelo669929209.wordpress.com/' title='Klikni by przejsc do strony!' style='text-decoration:none; color:black;' target='_blank'> Jeden z wielu projeków zrobionych przeze mnie w ramach praktyk - nauczyłęm się na nim obsługi WordPressa, i został oceniony jako najlepszy ze wszystkich przez mojego PraktykoDawcę! </a>"
      } 

      else if (x==4){
        ha.innerText="Rozsyłącz maili..."
        pe.innerText="Jeden z wielu projeków zrobionych przeze mnie w Pythonie. Niestety tak jak widać umarł on w etapie projektowym. Co prawda sama teoria wysłania Maila działała szybciej niż wersja konwencjonalna, ale samo wysłanie zajmowało kilkadziesiąt sekund... Okazało się to nieopłacalne i niepomocne podczas nauczania zdalnego...  ";
      } 
    }
    else if (x==0){
      document.getElementById("slajd").style.width="0%";
      document.getElementById("slajd").style.border="0";

      
    }
  }
}
