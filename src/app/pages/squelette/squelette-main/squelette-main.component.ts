import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-squelette-main',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './squelette-main.component.html',
  styleUrl: './squelette-main.component.scss'
})
export class SqueletteMainComponent {

}
