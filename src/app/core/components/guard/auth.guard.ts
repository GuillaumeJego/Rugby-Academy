import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole = route.data['role'];
    const userRole = this.authService.getUserRole();

    // Autoriser les routes publiques
    if (expectedRole === 'public') {
      return true;
    }

    // Vérifier l'authentification
    if (!this.authService.isAuthenticated()) {
      return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
    }

    // Vérifier le rôle
    if (expectedRole && userRole !== expectedRole && userRole !== 'admin') {
      return this.router.createUrlTree(['/unauthorized']);
    }

    return true;
  }
}