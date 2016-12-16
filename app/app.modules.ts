import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component.app';
import { ArtistItemComponent } from './component.artist-item';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent, ArtistItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}