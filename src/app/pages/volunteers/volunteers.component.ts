import { Component, OnInit } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { RouterModule } from '@angular/router';
   import { FormsModule } from '@angular/forms';
   import { VolunteerModel } from '../../core/models/volunteer.model';
   import { VolunteerService } from '../../core/services/volunteer.service';

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

     volunteerName: string = '';
     selectedStand: string = '';
     selectedTimeSlot: string = '';

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
       const modalElement = document.getElementById('signUpModal');
       if (modalElement && typeof (window as any).bootstrap !== 'undefined') {
         const modal = new (window as any).bootstrap.Modal(modalElement);
         modal.show();
       } else {
         console.error('Bootstrap Modal non disponible ou élément modal introuvable.');
         alert('Erreur : Impossible d’ouvrir le formulaire d’inscription. Merci de contacter Guillaume.');
       }
     }

     submitSignUp() {
       if (!this.volunteerName.trim()) {
         alert('Veuillez entrer votre nom.');
         return;
       }

       const volunteer = {
         name: this.volunteerName,
         stand: this.selectedStand,
         time_slot: this.selectedTimeSlot
       };

       this.volunteerService.signUp(volunteer).subscribe({
         next: (response) => {
           alert(response.message);
           this.loadVolunteers(); // Recharger la liste après inscription
           const modalElement = document.getElementById('signUpModal');
           if (modalElement && typeof (window as any).bootstrap !== 'undefined') {
             const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
             modal.hide();
           }
         },
         error: (error) => {
           alert(error.error?.error || 'Erreur lors de l’inscription.');
         }
       });
     }
   }