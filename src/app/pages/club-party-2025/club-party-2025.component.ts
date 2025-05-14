import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-club-party-2025',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './club-party-2025.component.html',
  styleUrl: './club-party-2025.component.scss'
})
export class ClubParty2025Component {
  joinWhatsApp() {
    window.open('https://chat.whatsapp.com/FarGcG9Wp49HzxOnpHEugm', '_blank');
  }
}