import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PuppyListComponent } from './puppy-list/puppy-list.component';
import { PuppiesComponent } from './puppies/puppies.component';
import { PuppyAvatarsComponent } from './puppy-avatars/puppy-avatars.component';

@NgModule({
  declarations: [
    AppComponent,
    PuppyListComponent,
    PuppiesComponent,
    PuppyAvatarsComponent
  ],
  imports: [BrowserModule, MatListModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
