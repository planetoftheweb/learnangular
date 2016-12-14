import { Component } from '@angular/core';
import { Artist } from './class.artist';

@Component({
  selector: 'artist-details',
  templateUrl: 'partials/artist-details.html',
  styleUrls : ['css/artist-details.css'],
  inputs: ['artist']
})
export class ArtistDetailsComponent { }