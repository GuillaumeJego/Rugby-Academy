import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { Manager } from '../../core/models/CategoryIncroyableTalent.model';
import { Category } from '../../core/models/managerIncroyableTalent.model';
import { ManagerIncroyableTalentService } from '../../core/services/manager-incroyable-talent.service';

@Component({
  selector: 'app-incroyables-talents2025',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './incroyables-talents2025.component.html',
  styleUrl: './incroyables-talents2025.component.scss'
})
export class IncroyablesTalents2025Component implements OnInit {
  managers: Manager[] = [];
  categories: Category[] = [
    { name: 'Baby', icon: 'bi-person', description: 'Spectacle des plus jeunes.', detail: 'Les Baby présentent un petit numéro amusant adapté à leur âge.' },
    { name: 'U6', icon: 'bi-person', description: 'Performance des U6.', detail: 'Les U6 préparent un spectacle collectif.' },
    { name: 'U8', icon: 'bi-person', description: 'Show des U8.', detail: 'Les U8 proposent une chorégraphie ou un sketch.' },
    { name: 'U10', icon: 'bi-person', description: 'Création des U10.', detail: 'Les U10 créent un numéro original.' },
    { name: 'U12', icon: 'bi-person', description: 'Présentation des U12.', detail: 'Les U12 montent un spectacle dynamique.' },
    { name: 'U14', icon: 'bi-person', description: 'Performance des U14.', detail: 'Les U14 offrent un numéro créatif.' },
    { name: 'U16', icon: 'bi-person', description: 'Show des U16.', detail: 'Les U16 préparent une animation marquante.' },
    { name: 'U19', icon: 'bi-person', description: 'Création des U19.', detail: 'Les U19 présentent un spectacle impressionnant.' },
    { name: 'Seniors', icon: 'bi-person', description: 'Performance des Seniors.', detail: 'Les Seniors proposent un numéro mémorable.' },
    { name: 'Réserves', icon: 'bi-person', description: 'Show des Réserves.', detail: 'Les Réserves créent une animation originale.' },
    { name: 'R5', icon: 'bi-person', description: 'Performance des R5.', detail: 'Les R5 préparent un spectacle unique.' },
    { name: 'Féminines', icon: 'bi-person', description: 'Création des Féminines.', detail: 'Les Féminines offrent un numéro vibrant.' }
  ];
  responsables = ['Responsable 1', 'Responsable 2'];

  managerFirstName: string = '';
  managerLastName: string = '';
  managerPhone: string = '';
  selectedCategory: string = '';
  selectedResponsable: string = '';
  selectedCategoryName: string = '';
  selectedDetail: string = '';

  constructor(private managerService: ManagerIncroyableTalentService) {}

  ngOnInit(): void {
    this.loadManagers();
  }

  loadManagers() {
    this.managerService.getManagers().subscribe({
      next: (managers) => {
        this.managers = managers;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des gérants:', error);
        alert('Impossible de charger les gérants. Veuillez réessayer. Merci de contacter Guillaume.');
      }
    });
  }

  getManagerForResponsable(category: string, responsable: string): Manager | null {
    return this.managers.find(m => m.category === category && m.responsable === responsable) || null;
  }

  openSignUpModal(category: string, responsable: string) {
    this.selectedCategory = category;
    this.selectedResponsable = responsable;
    this.managerFirstName = '';
    this.managerLastName = '';
    this.managerPhone = '';
    const modalElement = document.getElementById('signUpModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Élément modal introuvable.');
      alert('Erreur : Impossible d’ouvrir le formulaire d’inscription. Merci de contacter Guillaume.');
    }
  }

  openDetailModal(categoryName: string, detail: string) {
    this.selectedCategoryName = categoryName;
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
    if (!this.managerFirstName.trim() || !this.managerLastName.trim()) {
      alert('Veuillez remplir tous les champs obligatoires (prénom et nom).');
      return;
    }

    const manager: Manager = {
      firstName: this.managerFirstName,
      lastName: this.managerLastName,
      phone: this.managerPhone || '',
      category: this.selectedCategory,
      responsable: this.selectedResponsable
    };

    this.managerService.signUp(manager).subscribe({
      next: (response) => {
        alert(response.message);
        this.loadManagers();
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