import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    RouterModule,
    TimelineComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  // Méthode pour gérer le clic sur le bouton WhatsApp
  joinWhatsApp() {
    console.log('Redirection vers le groupe WhatsApp');
    // Tu peux ajouter une logique supplémentaire ici, comme une redirection ou une alerte
  }

  // Méthode générique pour les clics (si tu veux ajouter d'autres interactions)
  onClick(route: string) {
    console.log(`Clic détecté sur ${route}`);
  }

  openPlanModal() {
    // Logique supplémentaire si nécessaire
    console.log('Ouverture de la modale du plan');
  }
}