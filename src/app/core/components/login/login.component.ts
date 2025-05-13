import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.authService.login(this.credentials).subscribe({
      next: () => {
        const role = this.authService.getUserRole();
        const redirectUrl = this.router.parseUrl(this.router.url).queryParams['returnUrl'] || '/home';
        this.router.navigate([redirectUrl]);
      },
      error: (err) => console.error('Erreur de connexion', err)
    });
  }
}