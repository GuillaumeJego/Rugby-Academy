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
    console.log('Redirection vers le groupe WhatsApp');
  }
}
