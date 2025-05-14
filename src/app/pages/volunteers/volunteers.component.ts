import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VolunteerModel } from '../../core/models/volunteer.model';
import { VolunteerService } from '../../core/services/volunteer.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-volunteers',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {
  volunteers: VolunteerModel[] = [];
  stands = [
    { name: 'Rugby touché', icon: 'bi-person-arms-up', description: 'Organisez des matchs de 5 min entre 2 équipes.', detail: 'Les matchs de Rugby touché se jouent en 5 minutes avec 2 équipes de 5 joueurs. Objectif : marquer le plus de points en plaquant l\'adversaire avec un toucher.' },
    { name: 'Rugby touché 2', icon: 'bi-person-arms-up', description: 'Organisez des matchs de 5 min entre 2 équipes.', detail: 'Les matchs de Rugby touché se jouent en 5 minutes avec 2 équipes de 5 joueurs. Objectif : marquer le plus de points en plaquant l\'adversaire avec un toucher.' },
    { name: 'Tir à la corde', icon: 'bi-link-45deg', description: 'Animez des duels pleins de force et de fun.', detail: 'Deux équipes s’affrontent en tirant une corde. La première à faire reculer l’autre de 5 mètres gagne.' },
    { name: 'Course de brouette', icon: 'bi-cart3', description: 'Chronométrez jusqu’à 4 équipes en compétition.', detail: 'Les participants forment des paires, l’un pousse l’autre en brouette. Le temps est chronométré sur un parcours de 20 mètres.' },
    { name: 'Lancer de ballon', icon: 'bi-balloon', description: 'Gérez les lancers vers des cibles pour marquer des points.', detail: 'Chaque joueur lance un ballon vers des cibles numérotées. Les points sont cumulés selon la cible touchée.' },
    { name: 'Parcours d’obstacles', icon: 'bi-cone-striped', description: 'Guidez les équipes dans un parcours chronométré.', detail: 'Un parcours avec cônes, tunnels et sauts, à compléter en équipe dans le temps imparti.' },
    { name: 'Relais avec ballon', icon: 'bi-arrow-repeat', description: 'Supervisez une course effrénée avec ballon.', detail: 'Les équipes se passent un ballon en courant sur 50 mètres, la première à finir gagne.' },
    { name: 'Passe à dix', icon: 'bi-pass', description: 'Comptez les passes pour réussir le défi en équipe.', detail: 'L’équipe doit réussir 10 passes consécutives sans perdre le ballon.' },
    { name: 'Saut en sac', icon: 'bi-bag', description: 'Chronométrez les équipes dans cette course hilarante.', detail: 'Les participants sautent dans des sacs sur 20 mètres, le temps est chronométré.' },
    { name: 'Quiz rugby', icon: 'bi-question-circle', description: 'Posez des questions sur le rugby aux équipes.', detail: '10 questions sur le rugby, 1 point par bonne réponse, gagnant à 6 points.' },
    { name: 'Lancer de béret', icon: 'bi-hat', description: 'Arbitrez ce duel dynamique entre 2 équipes.', detail: 'Chaque équipe lance un béret vers une cible, points selon la distance.' },
    { name: 'Course à l’aveugle', icon: 'bi-eye-slash', description: 'Assurez la sécurité et guidez les équipes.', detail: 'Un participant est bandé, guidé par son équipe sur 30 mètres.' },
    { name: 'Chamboule-tout', icon: 'bi-boxes', description: 'Comptez les boîtes renversées par les équipes.', detail: 'Lancer des balles pour renverser des boîtes empilées, points par boîte tombée.' },
  ];

  timeSlots = [
    '15h00-15h30',
    '15h30-16h00',
    '16h00-16h30',
    '16h30-17h00'
  ];

  volunteerName: string = '';
  volunteerLastName: string = '';
  volunteerPhoneNumber: string = '';
  selectedStand: string = '';
  selectedTimeSlot: string = '';
  selectedStandName: string = ''; // Pour le titre de la modal des détails
  selectedDetail: string = ''; // Pour le contenu de la modal des détails

  constructor(private volunteerService: VolunteerService) {}

  ngOnInit(): void {
    this.loadVolunteers();
  }

  loadVolunteers() {
    this.volunteerService.getVolunteers().subscribe({
      next: (volunteers) => {
        this.volunteers = volunteers;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des bénévoles:', error);
        alert('Impossible de charger les bénévoles. Veuillez réessayer. Merci de contacter Guillaume.');
      }
    });
  }

  getVolunteerForSlot(stand: string, slot: string): VolunteerModel | null {
    return this.volunteers.find(v => v.stand === stand && v.timeSlots.includes(slot)) || null;
  }

  openSignUpModal(stand: string, slot: string) {
    this.selectedStand = stand;
    this.selectedTimeSlot = slot;
    this.volunteerName = '';
    this.volunteerLastName = '';
    this.volunteerPhoneNumber = '';
    const modalElement = document.getElementById('signUpModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Élément modal introuvable.');
      alert('Erreur : Impossible d’ouvrir le formulaire d’inscription. Merci de contacter Guillaume.');
    }
  }

  openDetailModal(standName: string, detail: string) {
    this.selectedStandName = standName;
    this.selectedDetail = detail;
    const modalElement = document.getElementById('detailModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Élément modal introuvable.');
      alert('Erreur : Impossible d’ouvrir la modal des détails.');
    }
  }

  submitSignUp() {
    if (!this.volunteerName.trim() || !this.volunteerLastName.trim()) {
      alert('Veuillez remplir tous les champs (prénom, nom de famille, numéro de téléphone).');
      return;
    }

    const volunteer = {
      name: this.volunteerName,
      last_name: this.volunteerLastName,
      phone_number: this.volunteerPhoneNumber,
      stand: this.selectedStand,
      time_slot: this.selectedTimeSlot
    };

    this.volunteerService.signUp(volunteer).subscribe({
      next: (response) => {
        alert(response.message);
        this.loadVolunteers();
        const modalElement = document.getElementById('signUpModal');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal?.hide();
        }
      },
      error: (error) => {
        alert(error.error?.error || 'Erreur lors de l’inscription.');
      }
    });
  }
}