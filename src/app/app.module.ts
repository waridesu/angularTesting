import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeListComponent } from "./components/home-list/home-list.component";
import { HttpClientModule } from "@angular/common/http";
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    HomeListComponent,
    DialogComponent,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
