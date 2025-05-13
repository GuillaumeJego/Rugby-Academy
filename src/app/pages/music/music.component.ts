import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {

}
