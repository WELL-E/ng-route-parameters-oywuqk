import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PandaListComponent } from './panda-list/panda-list.component';
import { PandaDisplayComponent } from './panda-display/panda-display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [AppComponent, PandaListComponent, PandaDisplayComponent, HomeComponent],
   imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
