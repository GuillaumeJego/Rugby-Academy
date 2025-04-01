import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-principale',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './menu-principale.component.html',
  styleUrl: './menu-principale.component.scss'
})
export class MenuPrincipaleComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
