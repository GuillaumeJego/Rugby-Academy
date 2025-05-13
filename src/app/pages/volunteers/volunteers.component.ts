import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VolunteerModel } from '../../core/models/volunteer.model';

@Component({
  selector: 'app-volunteers',
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './volunteers.component.html',
  styleUrl: './volunteers.component.scss'
})
export class VolunteersComponent implements OnInit {
  volunteers: VolunteerModel[] = [
    // Rugby touché
    {
      id: 1,
      name: 'Guillaume',
      stand: 'Rugby touché',
      timeSlots: ['15h00-15h30', '15h30-16h00'],
      groupe: 'Rugby touché',
      image: 'assets/images/kermesse2025/rugby_touche.png',
      explanation: 'Organisez des matchs de 5 min entre 2 équipes. Expliquez les règles du rugby touché, assurez la sécurité, et chronométrez les matchs.'
    },
    {
      id: 2,
      name: 'Céline',
      stand: 'Rugby touché',
      timeSlots: ['16h00-16h30'],
      groupe: 'Rugby touché',
      image: 'assets/images/kermesse2025/rugby_touche.png',
      explanation: 'Assistez à l’organisation des matchs de rugby touché. Comptez les points et motivez les équipes.'
    },
    // Tir à la corde
    {
      id: 3,
      name: 'Nicolas',
      stand: 'Tir à la corde',
      timeSlots: ['15h30-16h00', '16h30-17h00'],
      groupe: 'Tir à la corde',
      image: 'assets/images/kermesse2025/tir_corde.png',
      explanation: 'Animez des duels de tir à la corde. Assurez l’équité des équipes, donnez le signal de départ, et proclamez les vainqueurs.'
    },
    // Course de brouette
    {
      id: 4,
      name: 'Émilie',
      stand: 'Course de brouette',
      timeSlots: ['15h00-15h30'],
      groupe: 'Course de brouette',
      image: 'assets/images/kermesse2025/brouette.png',
      explanation: 'Chronométrez jusqu’à 4 équipes en compétition. Assurez la sécurité sur le parcours et validez les temps.'
    },
    // Lancer de ballon
    {
      id: 5,
      name: 'Fabrice',
      stand: 'Lancer de ballon',
      timeSlots: ['16h00-16h30', '16h30-17h00'],
      groupe: 'Lancer de ballon',
      image: 'assets/images/kermesse2025/lancer_ballon.png',
      explanation: 'Gérez les lancers vers des cibles pour marquer des points. Expliquez les règles et comptabilisez les scores.'
    },
    // Parcours d’obstacles
    {
      id: 6,
      name: 'Sophie',
      stand: 'Parcours d’obstacles',
      timeSlots: ['15h00-15h30', '16h30-17h00'],
      groupe: 'Parcours d’obstacles',
      image: 'assets/images/kermesse2025/parcours_obstacles.png',
      explanation: 'Guidez les équipes dans un parcours chronométré. Assurez la sécurité et validez les temps.'
    }
  ];

  stands = [
    { name: 'Rugby touché', icon: 'bi-person-arms-up', description: 'Organisez des matchs de 5 min entre 2 équipes.' },
    { name: 'Tir à la corde', icon: 'bi-link-45deg', description: 'Animez des duels pleins de force et de fun.' },
    { name: 'Course de brouette', icon: 'bi-cart3', description: 'Chronométrez jusqu’à 4 équipes en compétition.' },
    { name: 'Lancer de ballon', icon: 'bi-balloon', description: 'Gérez les lancers vers des cibles pour marquer des points.' },
    { name: 'Parcours d’obstacles', icon: 'bi-cone-striped', description: 'Guidez les équipes dans un parcours chronométré.' },
    { name: 'Relais avec ballon', icon: 'bi-arrow-repeat', description: 'Supervisez une course effrénée avec ballon.' },
    { name: 'Passe à dix', icon: 'bi-pass', description: 'Comptez les passes pour réussir le défi en équipe.' },
    { name: 'Saut en sac', icon: 'bi-bag', description: 'Chronométrez les équipes dans cette course hilarante.' },
    { name: 'Quiz rugby', icon: 'bi-question-circle', description: 'Posez des questions sur le rugby aux équipes.' },
    { name: 'Lancer de béret', icon: 'bi-hat', description: 'Arbitrez ce duel dynamique entre 2 équipes.' },
    { name: 'Course à l’aveugle', icon: 'bi-eye-slash', description: 'Assurez la sécurité et guidez les équipes.' },
    { name: 'Chamboule-tout', icon: 'bi-boxes', description: 'Comptez les boîtes renversées par les équipes.' }
  ];

  timeSlots = [
    '15h00-15h30',
    '15h30-16h00',
    '16h00-16h30',
    '16h30-17h00'
  ];

  ngOnInit(): void {
    // No grouping needed; volunteers are accessed directly
  }

  getVolunteerForSlot(stand: string, slot: string): VolunteerModel | null {
    return this.volunteers.find(v => v.stand === stand && v.timeSlots.includes(slot)) || null;
  }

  signUp(stand: string, slot: string) {
    // Placeholder for sign-up logic (e.g., open a form or redirect)
    console.log(`Inscription pour ${stand} à ${slot}`);
    alert(`Inscription pour ${stand} à ${slot}. Veuillez contacter Guillaume Jego pour confirmer.`);
  }
}