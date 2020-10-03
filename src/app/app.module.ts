import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { OmnieComponent } from './omnie/omnie.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PlaceHolderComponent,
    OmnieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
