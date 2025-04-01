import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivityImageModel } from '../../core/models/activityImage.model';
import * as bootstrap from 'bootstrap'; // Importer Bootstrap pour gérer la modale

@Component({
  selector: 'app-events-u6',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './events-u6.component.html',
  styleUrl: './events-u6.component.scss'
})
export class EventsU6Component implements OnInit {
  // Liste des images des activités U6
  activityImages: ActivityImageModel[] = [
    {
      src: '/assets/images/22mars2025/activityU6/250322-01-U6-CD22.jpg',
      alt: 'Activité U6 - Image 1',
      caption: 'Les U6 participent à un atelier de motricité pour développer leur coordination.'
    },
    {
      src: '/assets/images/22mars2025/activityU6/250322-02-U6-CD22.jpg',
      alt: 'Activité U6 - Image 2',
      caption: 'Un jeu collectif pour apprendre les bases du rugby tout en s’amusant.'
    },
    {
      src: '/assets/images/22mars2025/activityU6/250322-03-U6-CD22.jpg',
      alt: 'Activité U6 - Image 3',
      caption: 'Les enfants s’entraînent à passer le ballon lors d’un exercice ludique.'
    },
    {
      src: '/assets/images/22mars2025/activityU6/250322-04-U6-CD22.jpg',
      alt: 'Activité U6 - Image 4',
      caption: 'Dans la bonne humeur, les enfants apprennent les règles du rugby à travers un jeu amusant.'
    }
  ];

  selectedImage: ActivityImageModel | null = null; // Image actuellement sélectionnée pour la modale

  ngOnInit(): void {
    // Rien à initialiser pour le moment
  }

  // Méthode pour ouvrir la modale avec l'image sélectionnée
  openImageModal(image: ActivityImageModel): void {
    this.selectedImage = image;
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}