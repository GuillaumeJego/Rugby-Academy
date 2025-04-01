import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Timeline } from '../../core/models/timeline.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  // Données de la timeline
  timeline: Timeline[] = [
    {
      time: '11h45',
      title: 'Pique-nique bénévoles (et parents?)',
      description: 'Nous vous proposons un pique-nique entre nous, façon auberge espagnole ! Chacun apporte un petit plat, une boisson ou une gourmandise à partager. Plus on est gourmands, plus on rit… et plus le moment sera convivial ! 😄Et si les parents et les enfants souhaitent nous rejoindre avec leur propre pique-nique, ils seront les bienvenus autour de notre table. Nous ne prévoyons pas leur repas, mais partager ce moment tous ensemble sera un vrai plaisir. Plus on est nombreux, plus l’ambiance sera belle ! 🎉'
    },
    {
      time: '12h00',
      title: 'Accueil des équipes',
      description: 'Accompagnement vers les vestiaires et explication des consignes : une fois changés, les joueurs iront mettre leurs affaires dans le barnum à l’endroit indiqué. Proposer un café aux accompagnants. Aiguiller si besoin pour le lieu de leur pique-nique.'
    },
    {
      time: '13h00',
      title: 'Prise en charge des enfants',
      description: 'Heure officielle de rendez-vous. À partir de ce moment, les enfants sont pris en charge sous la responsabilité des éducateurs. Avant cette heure, ils restent sous la responsabilité de leurs parents.'
    },    
    {
      time: '13h05',
      title: 'Distribution des gilets oranges',
      description: 'Explication des rôles pour chaque bénévole. Les équipes s’échauffent. Faire la police si besoin : PERSONNE SUR LES TERRAINS hormis les encadrants avec gilets orange et rouge. En cas de problème, voir avec Guillaume JEGO.'
    },
    {
      time: '13h10',
      title: 'Briefing du CD22 aux dirigeants U8',
      description: 'Réunion pour les consignes officielles du CD22 pour les catégories U8 et U10.'
    },
    {
      time: '13h15',
      title: 'Briefing du CD22 aux dirigeants U10',
      description: 'Réunion pour les consignes officielles du CD22 pour les catégories U8 et U10.'
    },
    {
      time: '13h20',
      title: 'Photo de groupe',
      description: 'Photo de groupe avec tous les enfants, dirigeants et bénévoles (U6, U8, U10).'
    },
    {
      time: '13h25',
      title: 'Préparation des terrains et des équipes',
      description: 'Les responsables terrain se placent sur leurs terrains (U8, U10). Les préparateurs visualisent les équipes et commencent à préparer celles qui jouent leur premier match sur chaque terrain.'
    },
    {
      time: '13h30',
      title: 'Début du tournoi',
      description: 'Début des matchs. Continuer à faire la police si besoin : PERSONNE SUR LES TERRAINS hormis les encadrants avec gilets orange et rouge. En cas de problème, voir avec Guillaume JEGO.'
    },
    {
      time: '13h45',
      title: 'Consignes du CD22 aux dirigeants (U6)',
      description: 'Réunion pour les consignes officielles du CD22 pour la catégorie U6.'
    },
    {
      time: '13h45 - 15h00',
      title: 'Enchaînement des matchs et activités',
      description: 'Enchaînement des matchs pour U8 et U10, et des activités pour U6. Continuer à faire la police si besoin : PERSONNE SUR LES TERRAINS hormis les encadrants avec gilets orange et rouge. En cas de problème, voir avec Guillaume JEGO.'
    },
    {
      time: '15h00',
      title: 'Fin des activités U6',
      description: 'Fin des activités pour les U6, mais ce n’est pas fini. Rappel : une haie d’honneur aura lieu à 15h25. Bénévoles goûter : préparation du goûter (ne pas distribuer encore, attendre après la haie d’honneur).'
    },
    {
      time: '15h20',
      title: 'Fin des matchs U8 et U10',
      description: 'Fin des matchs pour U8 et U10, mais ce n’est pas fini. Rappel : une haie d’honneur aura lieu à 15h25.'
    },
    {
      time: '15h25',
      title: 'Haie d’honneur pour les U19',
      description: 'Tous les enfants sont en place pour la haie d’honneur pour le match U19 (Dinan vs Lannion).'
    },
    {
      time: '15h30',
      title: 'Fin de la haie d’honneur',
      description: 'La haie d’honneur se termine.'
    },
    {
      time: '15h31',
      title: 'Distribution du goûter',
      description: 'Distribution du goûter pour tous les enfants (et les grands !).'
    },
    {
      time: '16h00',
      title: 'Fin du goûter',
      description: 'Fin de la distribution du goûter et clôture de la journée.'
    }
  ];

  ngOnInit(): void {}
}