import { KontaktComponent } from './kontakt/kontakt.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmnieComponent } from './omnie/omnie.component';


const routes: Routes = [
  {path:'placeholder', component:PlaceHolderComponent},
  {path:'omnie',component:OmnieComponent},
  {path:'kontakt',component:KontaktComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
