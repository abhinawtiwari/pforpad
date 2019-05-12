import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DonorsListComponent } from './donors-list/donors-list.component';
import { ContributeComponent } from './contribute/contribute.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DonorsListComponent,
    ContributeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
