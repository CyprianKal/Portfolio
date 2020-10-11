import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { OmnieComponent } from './omnie/omnie.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { StackComponent } from './stack/stack.component';
import { StopkaComponent } from './stopka/stopka.component';
import { AchiveComponentComponent } from './achive-component/achive-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PlaceHolderComponent,
    OmnieComponent,
    KontaktComponent,
    StackComponent,
    StopkaComponent,
    AchiveComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
