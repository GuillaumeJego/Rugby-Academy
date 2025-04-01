import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlayerModel } from '../../core/models/player.model';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: PlayerModel[] = [
    // Coordinateur
    { 
      id: 1, 
      name: 'Guillaume', 
      position: 'Coordination', 
      groupe: 'Coordinateur', 
      image: 'assets/images/22mars2025/Plan.png',
      explanation: 'En tant que coordinateur, vous êtes responsable de la supervision générale de l’événement. Assurez-vous que chaque groupe fonctionne correctement, gérez les imprévus et coordonnez les communications entre les équipes.'
    },

    // U6
    { 
      id: 2, 
      name: 'Céline.L', 
      position: 'Logistique U6', 
      groupe: 'U6', 
      image: 'assets/images/22mars2025/U6.png',
      explanation: 'Vous êtes en charge de la logistique pour les U6. Préparez l’espace dédié aux U6, assurez-vous que les équipements sont prêts, accompagnez les enfants aux toilettes si nécessaire et gérez les petits bobos.'
    },
    { 
      id: 3, 
      name: 'Émilie', 
      position: 'Logistique U6', 
      groupe: 'U6', 
      image: 'assets/images/22mars2025/U6.png',
      explanation: 'Vous êtes en charge de la logistique pour les U6. Préparez l’espace dédié aux U6, assurez-vous que les équipements sont prêts, accompagnez les enfants aux toilettes si nécessaire et gérez les petits bobos.'
    },

    // U8
    { 
      id: 5, 
      name: 'Nicolas', 
      position: 'Responsables rotations équipes U8', 
      groupe: 'U8', 
      image: 'assets/images/22mars2025/U8.png',
      explanation: 'Organisez les rotations des équipes U8 sur les deux terrains. Communiquez avec les coachs pour garantir des transitions rapides et efficaces entre les matchs.'
    },
    { 
      id: 34, 
      name: 'Céline.C', 
      position: 'Assistance rotations équipes U8', 
      groupe: 'U8', 
      image: 'assets/images/22mars2025/U8.png',
      explanation: 'Accompagnez les rotations des équipes U10 sur les trois terrains en relation avec le Responsable rotation U8. Communiquez avec les coachs pour garantir des transitions rapides et efficaces entre les matchs.'
    },
    { 
      id: 6, 
      name: 'Cassady', 
      position: 'Responsable U8-T1', 
      groupe: 'U8', 
      image: 'assets/images/22mars2025/U81.png',
      explanation: 'Vous êtes responsable du terrain 1 pour les U8. Assurez le chronométrage des matchs et faites respecter le timing. Une autre responsabilité, et non des moindres : inscrivez le score à chaque essai pour assister l’arbitre dans la gestion du match. Supervisez les matchs, veillez au respect des règles et coordonnez avec les coachs pour un déroulement fluide.'
    },
    { 
      id: 4, 
      name: 'Fabrice', 
      position: 'Responsable U8-T2', 
      groupe: 'U8', 
      image: 'assets/images/22mars2025/U82.png',
      explanation: 'Vous êtes responsable du terrain 2 pour les U8. Assurez le chronométrage des matchs et faites respecter le timing. Une autre responsabilité, et non des moindres : inscrivez le score à chaque essai pour assister l’arbitre dans la gestion du match. Supervisez les matchs, veillez au respect des règles et coordonnez avec les coachs pour un déroulement fluide.'
    },
    
    // U10
    { 
      id: 7, 
      name: 'Félix', 
      position: 'Responsables rotations équipes U10', 
      groupe: 'U10', 
      image: 'assets/images/22mars2025/U10.png',
      explanation: 'Organisez les rotations des équipes U10 sur les trois terrains. Communiquez avec les coachs pour garantir des transitions rapides et efficaces entre les matchs.'
    },
    { 
      id: 35, 
      name: 'Marie.B', 
      position: 'Assistance rotations équipes U10', 
      groupe: 'U10', 
      image: 'assets/images/22mars2025/U10.png',
      explanation: 'Accompagnez les rotations des équipes U10 sur les trois terrains en relation avec le Responsable rotation U10. Communiquez avec les coachs pour garantir des transitions rapides et efficaces entre les matchs.'
    },
    { 
      id: 8, 
      name: 'Vincent', 
      position: 'Responsable U10-T1', 
      groupe: 'U10', 
      image: 'assets/images/22mars2025/U101.png',
      explanation: 'Vous êtes responsable du terrain 1 pour les U10. Assurez le chronométrage des matchs et faites respecter le timing. Une autre responsabilité, et non des moindres : inscrivez le score à chaque essai pour assister l’arbitre dans la gestion du match. Supervisez les matchs, veillez au respect des règles et coordonnez avec les coachs pour un déroulement fluide.'
    },
    { 
      id: 9, 
      name: 'Anaïs', 
      position: 'Responsable U10-T2', 
      groupe: 'U10', 
      image: 'assets/images/22mars2025/U102.png',
      explanation: 'Vous êtes responsable du terrain 2 pour les U10. Assurez le chronométrage des matchs et faites respecter le timing. Une autre responsabilité, et non des moindres : inscrivez le score à chaque essai pour assister l’arbitre dans la gestion du match. Supervisez les matchs, veillez au respect des règles et coordonnez avec les coachs pour un déroulement fluide.'
    },
    { 
      id: 10, 
      name: 'Aurélie', 
      position: 'Responsable U10-T3', 
      groupe: 'U10', 
      image: 'assets/images/22mars2025/U103.png',
      explanation: 'Vous êtes responsable du terrain 3 pour les U10. Assurez le chronométrage des matchs et faites respecter le timing. Une autre responsabilité, et non des moindres : inscrivez le score à chaque essai pour assister l’arbitre dans la gestion du match. Supervisez les matchs, veillez au respect des règles et coordonnez avec les coachs pour un déroulement fluide.'
    },

    // Goûter
    { 
      id: 11, 
      name: 'Cécilia', 
      position: 'Responsable réception gâteaux', 
      groupe: 'Goûter', 
      image: 'assets/images/22mars2025/gouter.png',
      explanation: 'Vous êtes en charge de la réception des gâteaux apportés par les parents. Organisez-les dans la zone goûter et assurez-vous qu’il y en a assez pour tous les enfants.'
    },
    { 
      id: 12, 
      name: 'Sophie', 
      position: 'Responsable préparation gâteau', 
      groupe: 'Goûter', 
      image: 'assets/images/22mars2025/gouter.png',
      explanation: 'Préparez les gâteaux pour la distribution. Coupez-les en portions, disposez-les sur des plateaux et coordonnez avec la personne responsable de la réception des gâteaux pour la distribution.'
    },
    { 
      id: 13, 
      name: 'Émilie', 
      position: 'Responsable préparation boissons', 
      groupe: 'Goûter', 
      image: 'assets/images/22mars2025/gouter.png',
      explanation: 'Préparez les boissons pour le goûter. Assurez-vous qu’il y a assez d’eau et de jus pour tous les enfants, et organisez la distribution avec l’équipe goûter.'
    },
    { 
      id: 13, 
      name: 'Clémentine', 
      position: 'Responsable distribution du goûter', 
      groupe: 'Goûter', 
      image: 'assets/images/22mars2025/gouter.png',
      explanation: 'Gère la distribution des boissons pour le goûter. Organisez la distribution avec l’équipe goûter.'
    },

    // Zone interdite
    { 
      id: 14, 
      name: 'Anne-Gaëlle', 
      position: 'Zone interdite', 
      groupe: 'Zone interdite', 
      image: 'assets/images/22mars2025/planrouge.png',
      explanation: 'Surveillez la zone interdite indiquée sur le plan en rouge. Assurez-vous que personne n’y accède, et signalez tout problème au coordinateur.'
    },
    { 
      id: 15, 
      name: 'Quentin', 
      position: 'Zone interdite', 
      groupe: 'Zone interdite', 
      image: 'assets/images/22mars2025/planrouge.png',
      explanation: 'Surveillez la zone interdite indiquée sur le plan en rouge. Assurez-vous que personne n’y accède, et signalez tout problème au coordinateur.'
    },
    { 
      id: 16, 
      name: 'Thibault', 
      position: 'Zone interdite', 
      groupe: 'Zone interdite', 
      image: 'assets/images/22mars2025/planrouge.png',
      explanation: 'Surveillez la zone interdite indiquée sur le plan en rouge. Assurez-vous que personne n’y accède, et signalez tout problème au coordinateur.'
    },

    // Haie d'honneur
    { 
      id: 17, 
      name: 'Guillaume', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Participez à la haie d’honneur à 15h25 pour accueillir les U19 de Dinan et Lannion. Placez-vous selon les indications et encouragez les joueurs !'
    },
    { 
      id: 18, 
      name: 'Céline.L', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Rejoignez la haie d’honneur à 15h25 pour les U19. Tenez-vous prête à encourager les équipes de Dinan et Lannion avant leur match.'
    },
    { 
      id: 19, 
      name: 'Émilie', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Soyez présente à 15h25 pour la haie d’honneur. Créez une ambiance festive en encourageant les U19 de Dinan et Lannion.'
    },
    { 
      id: 20, 
      name: 'Fabrice', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Participez à la haie d’honneur à 15h25. Placez-vous avec les autres bénévoles pour accueillir les U19 de Dinan et Lannion avec enthousiasme.'
    },
    { 
      id: 21, 
      name: 'Nicolas', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Rejoignez la haie d’honneur à 15h25 pour les U19. Encouragez les joueurs et contribuez à une ambiance de fête.'
    },
    { 
      id: 22, 
      name: 'Cassady', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Soyez prêt à 15h25 pour la haie d’honneur. Encouragez les U19 de Dinan et Lannion et participez à leur accueil chaleureux.'
    },
    { 
      id: 23, 
      name: 'Félix', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Participez à la haie d’honneur à 15h25. Encouragez les U19 et veillez à ce que l’événement se déroule dans la bonne humeur.'
    },
    { 
      id: 24, 
      name: 'Vincent', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Rejoignez la haie d’honneur à 15h25 pour accueillir les U19. Placez-vous selon les instructions et motivez les équipes.'
    },
    { 
      id: 25, 
      name: 'Anaïs', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Soyez prête à 15h25 pour la haie d’honneur. Créez une ambiance festive pour l’entrée des U19 de Dinan et Lannion.'
    },
    { 
      id: 26, 
      name: 'Aurélie', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Participez à la haie d’honneur à 15h25. Encouragez les U19 et contribuez à une entrée mémorable pour les équipes.'
    },
    { 
      id: 27, 
      name: 'Cécilia', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Rejoignez la haie d’honneur à 15h25 pour les U19. Tenez-vous prête à encourager les joueurs de Dinan et Lannion.'
    },
    { 
      id: 28, 
      name: 'Sophie', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Soyez présente à 15h25 pour la haie d’honneur. Encouragez les U19 et participez à une entrée inoubliable.'
    },
    { 
      id: 29, 
      name: 'Émilie', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Participez à la haie d’honneur à 15h25. Créez une ambiance positive pour accueillir les U19 de Dinan et Lannion.'
    },
    { 
      id: 30, 
      name: 'Anne-Gaëlle', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Rejoignez la haie d’honneur à 15h25. Tenez-vous prête à encourager les U19 et à les accueillir selon les indications.'
    },
    { 
      id: 31, 
      name: 'Quentin', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Soyez prêt à 15h25 pour la haie d’honneur. Encouragez les U19 de Dinan et Lannion et contribuez à une belle entrée.'
    },
    { 
      id: 32, 
      name: 'Marie.B', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Soyez prêt à 15h25 pour la haie d’honneur. Encouragez les U19 de Dinan et Lannion et contribuez à une belle entrée.'
    },
    { 
      id: 33, 
      name: 'Céline.C', 
      position: 'Haie d\'honneur', 
      groupe: 'Haie d\'honneur', 
      image: 'assets/images/22mars2025/haiehonneur.png',
      explanation: 'Soyez prêt à 15h25 pour la haie d’honneur. Encouragez les U19 de Dinan et Lannion et contribuez à une belle entrée.'
    },
  ];

  groupedPlayers: { [key: string]: PlayerModel[] } = {};
  groupes: string[] = [
    'Coordinateur',
    'U6',
    'U8',
    'U10',
    'Goûter',
    'Zone interdite',
    'Haie d\'honneur'
  ];
  selectedPlayer: PlayerModel | null = null;
  searchTerm: string = '';

  ngOnInit(): void {
    this.groupedPlayers = this.players.reduce((acc, player) => {
      const groupe = player.groupe;
      if (!acc[groupe]) {
        acc[groupe] = [];
      }
      acc[groupe].push(player);
      return acc;
    }, {} as { [key: string]: PlayerModel[] });
  }

  getFilteredPlayers(groupe: string): PlayerModel[] {
    if (!this.searchTerm) {
      return this.groupedPlayers[groupe] || [];
    }
    return (this.groupedPlayers[groupe] || []).filter(player =>
      player.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  hasResults(): boolean {
    return this.groupes.some(groupe => this.getFilteredPlayers(groupe).length > 0);
  }

  openDetailsModal(player: PlayerModel) {
    this.selectedPlayer = player;
    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}