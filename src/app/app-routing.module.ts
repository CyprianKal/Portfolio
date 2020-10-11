import { AchiveComponentComponent } from './achive-component/achive-component.component';
import { StackComponent } from './stack/stack.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmnieComponent } from './omnie/omnie.component';


const routes: Routes = [
  {path:'placeholder', component:PlaceHolderComponent},
  {path:'omnie',component:OmnieComponent},
  {path:'kontakt',component:KontaktComponent},
  {path:'stack',component:StackComponent},
  {path:'achive',component:AchiveComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
