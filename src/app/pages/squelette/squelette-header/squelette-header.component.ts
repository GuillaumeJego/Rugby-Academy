import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { MenuPrincipaleComponent } from './menu-principale/menu-principale.component';

@Component({
  selector: 'app-squelette-header',
  standalone: true,
  imports: [
    RouterModule,
    LoginComponent,
    LogoComponent,
    MenuPrincipaleComponent
  ],
  templateUrl: './squelette-header.component.html',
  styleUrl: './squelette-header.component.scss'
})
export class SqueletteHeaderComponent {

}
