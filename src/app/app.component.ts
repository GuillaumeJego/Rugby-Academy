import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { SqueletteHeaderComponent } from './pages/squelette/squelette-header/squelette-header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SqueletteMainComponent } from './pages/squelette/squelette-main/squelette-main.component';
import { SqueletteFooterComponent } from './pages/squelette/squelette-footer/squelette-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, 
    SqueletteHeaderComponent,
    SqueletteMainComponent,
    SqueletteFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'rugby-academy';
  
  ngOnInit() {
    // Vérifier si on est sur metana.fr sans www
    if (window.location.hostname === 'metana.fr') {
      console.log('Redirection vers www.metana.fr');
      window.location.href = 'https://www.metana.fr' + window.location.pathname;
    }
  }
}
